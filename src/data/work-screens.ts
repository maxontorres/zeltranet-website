import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n';
import type { ScreenKey } from './work';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/work/*/*.png',
  { eager: true },
);

/** Screenshot of an AI Automator screen in the given language. */
export function screen(lang: Locale, key: ScreenKey): ImageMetadata {
  const file = files[`../assets/work/${lang}/${key}.png`];
  if (!file) throw new Error(`Missing screenshot: ${lang}/${key}.png`);
  return file.default;
}
