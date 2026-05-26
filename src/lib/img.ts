// Reliable image path helper for GitHub Pages static export
// Hardcoded fallback ensures paths are correct even when env var is absent (CI build)
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "/backst-ble";
export const img = (path: string) => `${base}${path}`;
