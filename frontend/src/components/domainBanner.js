import * as React from "react";
import Link from "./Link";

const DomainBanner = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const hostname = window.location.hostname;
    // Condition mapping only the targeted domain.
    if (hostname.includes("annarbor") || hostname === "localhost") {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-Error-700 w-full py-3 px-4 flex justify-center items-center z-50">
      <div className="flex flex-col md:flex-row w-full justify-center items-center text-Shades-0 font-bold text-sm md:text-base text-center md:text-left">
        <svg
          className="w-8 h-8 md:w-6 md:h-6 mb-2 md:mb-0 md:mr-3 flex-shrink-0 text-Shades-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <p className="m-0 leading-tight text-white">
          Please use{" "}
          <Link href="https://hmcc.net" className="underline">
            hmcc.net
          </Link>{" "}
          to access HMCC&apos;s webpage. Note that annarbor.hmcc.net will no
          longer be active starting March 15, 2026.
        </p>
      </div>
    </div>
  );
};

export default DomainBanner;
