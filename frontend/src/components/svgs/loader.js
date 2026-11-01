import React from "react";
import { Loader } from "./index";

// `loading` shows the spinner, eg. while a client-only sermon listing hydrates
const LoadContainer = ({ loading = false }) => (
  <div
    id="loader"
    className={`fixed top-1/2 left-1/2 w-[5.75rem] h-[5.75rem] -translate-x-1/2 -translate-y-1/2 ${
      loading ? "" : "invisible"
    }`}
  >
    {loading && <Loader className="w-[5.75rem] h-[5.75rem]" />}
  </div>
);

export { Loader, LoadContainer };
