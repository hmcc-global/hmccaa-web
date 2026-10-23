import React from "react";
import { createRoot } from "react-dom/client";
import { Loader } from "./index";

// Updates that render within this long don't flash the spinner
const SHOW_LOADER_DELAY_MS = 150;

// Shows the spinner unless the update has replaced #loader (LoadContainer is keyed by filter) by then
const showLoader = () => {
  const loaderNode = document.getElementById("loader");
  setTimeout(() => {
    if (loaderNode?.isConnected) {
      loaderNode.classList.remove("invisible");
      const root = createRoot(loaderNode);
      root.render(<Loader className="w-[5.75rem] h-[5.75rem]" />);
    }
  }, SHOW_LOADER_DELAY_MS);
};

// `loading` shows the loader from the start instead of waiting for showLoader()
const LoadContainer = ({ loading = false }) => (
  <div
    id="loader"
    className={`fixed top-1/2 mx-auto w-full max-w-[5.75rem] max-h-[5.75rem] ${
      loading ? "" : "invisible"
    } -translate-x-[2.875rem]`}
  >
    {loading && <Loader className="w-[5.75rem] h-[5.75rem]" />}
  </div>
);

export { Loader, showLoader, LoadContainer };
