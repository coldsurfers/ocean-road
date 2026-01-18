let redirectMap: Record<string, string> = {};

export function initializeGlobalLinkRedirectMap(map: Record<string, string>) {
  redirectMap = map;
}

export function getRedirectHref(href: string) {
  return redirectMap[href] ?? href;
}
