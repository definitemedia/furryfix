/**
 * Official reel permalinks only (`https://www.instagram.com/reel/...`).
 * A normal fetch of the public profile did not return any reel URLs, so this
 * stays empty until real permalinks are added. Do not put captions, images,
 * or view counts here.
 */
export const instagramReelPermalinks: readonly string[] = [];

export const instagramProfileUrl = "https://www.instagram.com/furryfixindia";

export const instagramHandle = "@furryfixindia";

const reelPath = /^\/reel\/([A-Za-z0-9_-]+)\/?$/;

/** Up to `limit` unique reel permalinks safe to pass to Instagram's embed. */
export function instagramReelsToEmbed(limit = 4): string[] {
  const seen = new Set<string>();
  const permalinks: string[] = [];

  for (const raw of instagramReelPermalinks) {
    let parsed: URL;
    try {
      parsed = new URL(raw.trim());
    } catch {
      continue;
    }

    if (parsed.protocol !== "https:" || parsed.hostname !== "www.instagram.com") {
      continue;
    }

    const match = reelPath.exec(parsed.pathname);
    if (!match) continue;

    const permalink = `https://www.instagram.com/reel/${match[1]}/`;
    if (seen.has(permalink)) continue;

    seen.add(permalink);
    permalinks.push(permalink);
    if (permalinks.length >= limit) break;
  }

  return permalinks;
}
