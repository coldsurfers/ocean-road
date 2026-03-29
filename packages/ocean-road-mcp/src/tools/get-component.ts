import { components } from '../generated/data.js';

export function getComponent(slug: string) {
  const component = components.find((c) => c.slug === slug);
  if (!component) return null;
  return component;
}
