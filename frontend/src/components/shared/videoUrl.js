/**
 * Extracts a YouTube video ID from various URL formats and returns
 * a privacy-enhanced embed URL.
 *
 * Supported formats:
 *   - https://www.youtube.com/watch?v=VIDEO_ID
 *   - https://youtu.be/VIDEO_ID
 *   - https://m.youtu.be/VIDEO_ID
 */
export function getYouTubeEmbedUrl(url) {
  // Handle youtu.be/VIDEO_ID format
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) {
    return `https://www.youtube-nocookie.com/embed/${shortMatch[1]}`;
  }
  // Handle youtube.com/watch?v=VIDEO_ID format
  const longMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (longMatch) {
    return `https://www.youtube-nocookie.com/embed/${longMatch[1]}`;
  }
  return null;
}

/**
 * Extracts a Vimeo video ID from a URL and returns an embed URL.
 */
export function getVimeoEmbedUrl(url) {
  const match = url.match(/\d+/);
  if (match) {
    return `https://player.vimeo.com/video/${match[0]}?badge=0&autopause=0&player_id=0&app_id=58479`;
  }
  return null;
}
