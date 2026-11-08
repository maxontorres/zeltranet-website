// Cloudflare Worker: serves the static site and handles POST /api/contact.
// Static files are served directly; this script only runs for /api/* routes.

interface SendEmail {
  send(message: {
    to: string;
    from: { email: string; name: string };
    replyTo: string;
    subject: string;
    text: string;
  }): Promise<{ messageId: string }>;
}

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  EMAIL: SendEmail;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
  TURNSTILE_SECRET_KEY?: string;
}

type Result = 'sent' | 'invalid' | 'verification' | 'unavailable';

const limits = {
  name: [1, 120],
  company: [1, 160],
  email: [3, 254],
  project: [20, 6000],
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function reply(result: Result, status: number): Response {
  return new Response(JSON.stringify({ result }), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'none'",
    },
  });
}

function field(data: Record<string, unknown>, key: keyof typeof limits) {
  const value = data[key];
  if (typeof value !== 'string') return null;
  const text = value.trim();
  const [min, max] = limits[key];
  if (text.length < min || text.length > max) return null;
  if (key !== 'project' && /[\r\n]/.test(text)) return null;
  return text;
}

async function verifyTurnstile(token: string, secret: string, ip: string) {
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    { method: 'POST', body },
  );
  if (!response.ok) return false;
  const outcome = (await response.json()) as { success?: boolean };
  return outcome.success === true;
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') return reply('invalid', 405);

  const origin = request.headers.get('Origin');
  if (origin !== new URL(request.url).origin) return reply('invalid', 403);

  if (!env.CONTACT_TO || !env.TURNSTILE_SECRET_KEY) {
    console.error('Contact form is not configured: missing secrets.');
    return reply('unavailable', 503);
  }

  let data: Record<string, unknown>;
  try {
    data = (await request.json()) as Record<string, unknown>;
  } catch {
    return reply('invalid', 400);
  }

  // Hidden field that people never see; bots tend to fill it.
  if (typeof data.website === 'string' && data.website !== '') {
    return reply('sent', 200);
  }

  const name = field(data, 'name');
  const company = field(data, 'company');
  const email = field(data, 'email');
  const project = field(data, 'project');
  if (!name || !company || !email || !project || !emailPattern.test(email)) {
    return reply('invalid', 400);
  }

  const token = typeof data.token === 'string' ? data.token : '';
  if (!token || token.length > 2048) return reply('verification', 400);
  const ip = request.headers.get('CF-Connecting-IP') ?? '';
  try {
    if (!(await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, ip))) {
      return reply('verification', 400);
    }
  } catch (error) {
    console.error('Turnstile check failed', error);
    return reply('unavailable', 502);
  }

  const lang = data.lang === 'es' ? 'Spanish' : 'English';
  try {
    await env.EMAIL.send({
      to: env.CONTACT_TO,
      from: {
        email: env.CONTACT_FROM ?? 'website@zeltranet.com',
        name: 'Zeltranet website',
      },
      replyTo: email,
      subject: `Website enquiry: ${name} (${company})`,
      text: [
        'New enquiry from the Zeltranet contact form.',
        '',
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Page language: ${lang}`,
        '',
        'Project:',
        project,
        '',
        'Reply to this email to answer the sender directly.',
      ].join('\n'),
    });
  } catch (error) {
    const code = (error as { code?: string }).code ?? 'unknown';
    console.error('Email send failed', code, error);
    return reply('unavailable', 502);
  }

  return reply('sent', 200);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/contact' || pathname === '/api/contact/') {
      return handleContact(request, env);
    }
    if (pathname.startsWith('/api/')) {
      return new Response('Not found', { status: 404 });
    }
    return env.ASSETS.fetch(request);
  },
};
