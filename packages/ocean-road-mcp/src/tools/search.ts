import { components } from '../generated/data.js';

export function search(query: string) {
  const q = query.toLowerCase();
  return components
    .filter(
      (c) =>
        c.slug.includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.content.toLowerCase().includes(q)
    )
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      description: c.description,
      platform: c.platform,
      entry: c.entry,
    }));
}
