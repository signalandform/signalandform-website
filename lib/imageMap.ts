/**
 * Maps WordPress image URLs to local paths.
 * Scraper filenames: protocol + domain + path with / replaced by _
 * e.g. https://signalandformllc.com/wp-content/uploads/2025/11/SD-Retractable.webp
 *   -> signalandformllc.com_wp-content_uploads_2025_11_SD-Retractable.webp
 */

const IMAGE_BASE = "/images";

/**
 * Convert a WordPress image URL to the local path.
 * Handles: signalandformllc.com, i0.wp.com URLs; strips query params.
 */
export function getImageUrl(wordpressUrl: string): string {
  try {
    // Strip query params and fragments
    const url = wordpressUrl.split("?")[0].split("#")[0];
    // Extract path - support signalandformllc.com and i0.wp.com/signalandformllc.com
    const match = url.match(/(?:signalandformllc\.com|i0\.wp\.com\/signalandformllc\.com)(\/wp-content\/uploads\/[^/]+(?:\/[^/]+)*)/);
    if (!match) return wordpressUrl;
    const pathPart = match[1];
    // Build local filename: signalandformllc.com_ + path with / -> _
    const localName = "signalandformllc.com_" + pathPart.replace(/^\//, "").replace(/\//g, "_");
    return `${IMAGE_BASE}/${localName}`;
  } catch {
    return wordpressUrl;
  }
}

/**
 * Get the local filename (no leading /images/) for a WordPress URL.
 */
export function getImageFilename(wordpressUrl: string): string {
  const full = getImageUrl(wordpressUrl);
  return full.replace(IMAGE_BASE + "/", "");
}
