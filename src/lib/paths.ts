// MARK: - Base path
// The site can live at a domain root ("/") or under a sub-path such as
// "/pijat-rossalam/" on GitHub Pages. Every internal link goes through this
// helper so both work without code changes.

const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** "/kebijakan-privasi/" → "/pijat-rossalam/kebijakan-privasi/" (or unchanged at root). */
export function withBase(path: string): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
