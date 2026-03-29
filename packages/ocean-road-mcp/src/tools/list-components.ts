import { components } from '../generated/data.js';

export function listComponents(platform?: 'web' | 'next') {
  const filtered = platform ? components.filter((c) => c.platform === platform) : components;

  return filtered.map((c) => ({
    slug: c.slug,
    title: c.title,
    description: c.description,
    platform: c.platform,
    entry: c.entry,
  }));
}
