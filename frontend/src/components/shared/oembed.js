import React from "react";

function OEmbedVideo({ oembedString, className = "", fallback }) {
  fallback = fallback || (
    <div className="text-gray-500">No video embed available</div>
  );
  let parsed = null;

  try {
    parsed = JSON.parse(oembedString);
  } catch (err) {
    console.error("Failed to parse oEmbed string:", err);
    return fallback;
  }

  if (!parsed || !parsed.oembed || !parsed.oembed.html) {
    return fallback;
  }

  return (
    <div
      className={`aspect-video w-full max-w-4xl mx-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: parsed.oembed.html }}
    />
  );
}

export default OEmbedVideo;
