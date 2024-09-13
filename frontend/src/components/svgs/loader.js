import React from "react";
import { createRoot } from "react-dom/client";
import { Loader } from "./index";

const showLoader = () => {
  const loaderNode = document.getElementById("loader");
  if (loaderNode !== null) {
    loaderNode.classList.remove("invisible");
    const root = createRoot(loaderNode);
    root.render(<Loader />);
  }
};

const LoadContainer = () => (
  <div
    id="loader"
    className="absolute inset-x-[calc(50%-3.5rem)] inset-y-1/3 mx-auto my-auto w-full max-w-[7rem] invisible"
  ></div>
);

export { Loader, showLoader, LoadContainer };
