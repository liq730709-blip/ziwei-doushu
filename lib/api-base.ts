/**
 * Backend API origin for AI routes (/api/interpret, /api/heming).
 * Local Next.js: leave empty → same-origin.
 * GitHub Pages: set NEXT_PUBLIC_API_BASE to the Cloudflare Worker URL (no trailing slash).
 */
export const API_BASE = (process.env.NEXT_PUBLIC_API_BASE || '').replace(/\/+$/, '');

export function apiUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE}${p}`;
}
