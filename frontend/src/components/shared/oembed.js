import React from "react";

function getYouTubeEmbedUrl(url) {
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

function OEmbedVideo({ oembedString, className = "", fallbackUrl }) {
  let embedUrl = null;
  let title = "Video";

  if (oembedString && typeof oembedString === "string") {
    try {
      const parsed = JSON.parse(oembedString.replace(/\\\\/g, "\\"));
      if (parsed?.url) {
        embedUrl = getYouTubeEmbedUrl(parsed.url);
        title = parsed.title || "Video";
      }
    } catch (err) {
      console.error("Failed to parse oEmbed string:", err);
    }
  }

  // Use fallbackUrl if oEmbed parsing failed
  if (!embedUrl && fallbackUrl) {
    embedUrl = fallbackUrl;
  }

  if (!embedUrl) {
    return (
      <div
        className={`aspect-video w-full flex items-center justify-center text-lg ${className}`}
        style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }}
      >
        No video available
      </div>
    );
  }

  return (
    <div className={`aspect-video w-full ${className}`}>
      <iframe
        src={embedUrl}
        title={title}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default OEmbedVideo;
