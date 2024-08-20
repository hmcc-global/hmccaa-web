import React from "react";
import { createRoot } from "react-dom/client";
import { Loader } from "./index";

const showLoader = () => {
  const loaderNode = document.getElementById("loader");
  console.log("showing", loaderNode);
  if (loaderNode !== null) {
    console.log("surely getting skipped");
    const root = createRoot(loaderNode);
    root.render(<Loader />);
  }
};

export { Loader, showLoader };
