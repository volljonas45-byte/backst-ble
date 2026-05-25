// Reliable image path helper for GitHub Pages static export
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const img = (path: string) => `${base}${path}`;
