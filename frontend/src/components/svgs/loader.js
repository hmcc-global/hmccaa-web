import React from "react";
import { Loader } from "./index";

// `loading` shows the spinner, eg. while a client-only sermon listing hydrates
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

export { Loader, LoadContainer };
