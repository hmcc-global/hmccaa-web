import React from "react";
import { createRoot } from "react-dom/client";
import { Loader } from "./index";

const showLoader = () => {
  const loaderNode = document.getElementById("loader");
  if (loaderNode !== null) {
    loaderNode.classList.remove("invisible");
    const root = createRoot(loaderNode);
    root.render(<Loader className="w-[5.75rem] h-[5.75rem]" />);
  }
};

const LoadContainer = () => (
  <div
    id="loader"
    className="fixed top-1/2 mx-auto w-full max-w-[5.75rem] max-h-[5.75rem] invisible -translate-x-[2.875rem]"
  ></div>
);

export { Loader, showLoader, LoadContainer };
