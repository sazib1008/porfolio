/**
 * API base URL for HTTP requests.
 * - Production (Vercel): leave empty — requests use same-origin /api routes.
 * - Local dev with Vite only: set VITE_API_BASE_URL=http://localhost:3000
 *   while `vercel dev` is running, or rely on the Vite proxy below.
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export function apiUrl(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${normalized}`;
}
