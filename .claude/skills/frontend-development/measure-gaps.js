// Lists vertical gaps of 40px or more between visible content on the current page.
// Run it in the browser console (or a page-evaluation tool) after the page has loaded.
// "Content" is text, images, and any element with a visible border or a non-white
// background; boxes that overlap are merged, and each gap is reported with the content
// just above and below it.
(() => {
  const MIN_GAP = 40;
  const main = document.querySelector("main") || document.body;
  const scrollTop = window.scrollY;
  const isWhite = color =>
    color === "rgba(0, 0, 0, 0)" ||
    color === "rgb(255, 255, 255)" ||
    color === "transparent";
  const boxes = [];

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (!node.textContent.trim()) continue;
    const style = getComputedStyle(node.parentElement);
    if (style.visibility === "hidden" || style.opacity === "0") continue;
    const range = document.createRange();
    range.selectNodeContents(node);
    for (const rect of range.getClientRects()) {
      if (rect.width > 0 && rect.height > 0) {
        boxes.push({
          top: rect.top + scrollTop,
          bottom: rect.bottom + scrollTop,
          label: node.textContent.trim().slice(0, 40),
        });
      }
    }
  }

  document.querySelectorAll("body *").forEach(el => {
    const style = getComputedStyle(el);
    if (style.display === "none" || style.visibility === "hidden") return;
    // Page wrappers have a background but contain everything
    if (el.contains(main)) return;
    const rect = el.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;
    const media =
      el.classList.contains("gatsby-image-wrapper") ||
      (["IMG", "svg", "IFRAME", "VIDEO", "PICTURE"].includes(el.tagName) &&
        style.opacity !== "0");
    const border =
      parseFloat(style.borderTopWidth) > 0 &&
      style.borderTopStyle !== "none" &&
      !isWhite(style.borderTopColor);
    const background =
      !isWhite(style.backgroundColor) || style.backgroundImage !== "none";
    if (media || border || background) {
      const className = typeof el.className === "string" ? el.className : "";
      boxes.push({
        top: rect.top + scrollTop,
        bottom: rect.bottom + scrollTop,
        label: `<${el.tagName.toLowerCase()} ${className.slice(0, 40)}>`,
      });
    }
  });

  boxes.sort((a, b) => a.top - b.top);
  const merged = [];
  for (const box of boxes) {
    const last = merged[merged.length - 1];
    if (last && box.top <= last.bottom + 1) {
      if (box.bottom > last.bottom) {
        last.bottom = box.bottom;
        last.lastLabel = box.label;
      }
    } else {
      merged.push({ ...box, firstLabel: box.label, lastLabel: box.label });
    }
  }

  const gaps = [];
  for (let i = 1; i < merged.length; i++) {
    const gap = merged[i].top - merged[i - 1].bottom;
    if (gap >= MIN_GAP) {
      gaps.push(
        `${Math.round(gap)}px at y=${Math.round(merged[i - 1].bottom)}: ` +
          `${merged[i - 1].lastLabel} -> ${merged[i].firstLabel}`
      );
    }
  }
  return { width: window.innerWidth, gaps };
})();
