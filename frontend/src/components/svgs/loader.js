import React from "react";
import { createRoot } from "react-dom/client";
import { Loader } from "./index";

const showLoader = () => {
  const loaderNode = document.getElementById("loader");
  if (loaderNode !== null) {
    const root = createRoot(loaderNode);
    root.render(<Loader />);
  }
};

export { Loader, showLoader };
