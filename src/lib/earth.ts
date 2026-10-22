import coastlines from '../data/earth-coastlines.json';

type Vector = readonly [number, number, number];
export const initialRotation = (-102 * Math.PI) / 180;
const radians = Math.PI / 180;
function vector(longitude: number, latitude: number): Vector {
  const lat = latitude * radians,
    lon = longitude * radians;
  return [
    Math.cos(lat) * Math.sin(lon),
    Math.sin(lat),
    Math.cos(lat) * Math.cos(lon),
  ];
}
export const land = coastlines.map((line) => {
  const points: Vector[] = [];
  for (let i = 0; i < line.length; i += 2)
    points.push(vector(line[i]!, line[i + 1]!));
  return points;
});
export const grid: Vector[][] = [];
for (let lon = -180; lon < 180; lon += 15) {
  const line: Vector[] = [];
  for (let lat = -90; lat <= 90; lat += 5) line.push(vector(lon, lat));
  grid.push(line);
}
for (let lat = -75; lat <= 75; lat += 15) {
  const line: Vector[] = [];
  for (let lon = -180; lon <= 180; lon += 5) line.push(vector(lon, lat));
  grid.push(line);
}
// Geographic reference points, not office addresses: Vientiane first, Mexico last
// (both drawn as bases), with Bangkok and Kuala Lumpur between.
export const markets = [
  [102.63, 17.97],
  [100.5, 13.75],
  [101.69, 3.14],
  [-99.13, 19.43],
].map(([lon, lat]) => vector(lon!, lat!));
export function project(point: Vector, rotation: number, lift = 1) {
  const cosine = Math.cos(rotation),
    sine = Math.sin(rotation);
  const x = point[0] * cosine + point[2] * sine;
  const z = -point[0] * sine + point[2] * cosine;
  const y = 0.9286646 * point[1] - 0.3709205 * z;
  return {
    x: 270 + 157 * lift * x,
    y: 200 - 157 * lift * y,
    z: 0.3709205 * point[1] + 0.9286646 * z,
    outside: (x * x + y * y) * lift * lift > 1,
  };
}
export function paths(lines: Vector[][], rotation: number) {
  let front = '',
    back = '';
  for (const line of lines) {
    for (let i = 1; i < line.length; i++) {
      const a = project(line[i - 1]!, rotation),
        b = project(line[i]!, rotation);
      const segment = `M${a.x.toFixed(1)},${a.y.toFixed(1)}L${b.x.toFixed(1)},${b.y.toFixed(1)}`;
      if (a.z > 0 && b.z > 0) front += segment;
      else if (a.z <= 0 && b.z <= 0) back += segment;
    }
  }
  return { front, back };
}
export const routes = markets.slice(1).map((destination) => {
  const origin = markets[0]!;
  const angle = Math.acos(
    Math.min(
      1,
      Math.max(
        -1,
        origin[0] * destination[0] +
          origin[1] * destination[1] +
          origin[2] * destination[2],
      ),
    ),
  );
  const denominator = Math.sin(angle) || 1;
  return Array.from({ length: 33 }, (_, index) => {
    const progress = index / 32;
    const a = Math.sin((1 - progress) * angle) / denominator,
      b = Math.sin(progress * angle) / denominator;
    const point: Vector = [
      origin[0] * a + destination[0] * b,
      origin[1] * a + destination[1] * b,
      origin[2] * a + destination[2] * b,
    ];
    return { point, lift: 1 + 0.12 * Math.sin(Math.PI * progress) };
  });
});
