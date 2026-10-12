import * as React from "react";
import { navigate } from "gatsby";
import hmccLogo from "../images/hmcc-ripple-white.svg";
import dropDown from "../images/icons/dropdown.svg";
import x from "../images/icons/X.svg";
import Link from "./Link";

const browseList = [
  { title: "Home", route: "/" },
  { title: "About", route: "/about" },
  { title: "Get Involved", route: "/get-involved" },
  { title: "Events", route: "/events" },
  { title: "Watch", route: "/watch" },
  { title: "Give", route: "/give" },
  { title: "I'm New", route: "/new" },
];

const textStyle = "text-Shades-0 text-base leading-normal no-underline";
const logoStyle = "w-20 h-8 mb-0";

// compare paths regardless of trailing slash
const normalizePath = p => `/${(p || "").replace(/^\/+|\/+$/g, "")}`;

// Touch/mouse handling for the mobile menu: an item highlights on press, the
// highlight follows the pointer across items, and releasing on an item selects
// it (navigate + close). Releasing outside any item selects nothing.
const MobileNav = ({ path, onClose }) => {
  const [pressed, setPressed] = React.useState(null);
  const [dragEnabled, setDragEnabled] = React.useState(true);
  const overlayRef = React.useRef(null);
  const listRef = React.useRef(null);
  const pressedRef = React.useRef(null);
  const activePointer = React.useRef(null);
  const selectTimer = React.useRef(null);

  React.useEffect(() => () => clearTimeout(selectTimer.current), []);

  const setPressedRoute = route => {
    pressedRef.current = route;
    setPressed(route);
  };

  // Drag-to-select needs `touch-action: none`, which also disables native
  // scrolling. Only use it when everything fits on screen; if the menu
  // overflows (e.g. short landscape phones) fall back to native scrolling,
  // where a scroll gesture cancels the press and a plain tap still selects.
  React.useEffect(() => {
    const measure = () => {
      const el = overlayRef.current;
      if (el) setDragEnabled(el.scrollHeight <= el.clientHeight + 1);
    };
    // .mobile-nav is display:none until the scroll-lock classes (set by the
    // parent's effect) apply, so measure on the next frame
    const frame = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, []);

  // close on Escape and on browser back/forward
  React.useEffect(() => {
    const onKey = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    window.addEventListener("popstate", onClose);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", onClose);
    };
  }, [onClose]);

  const routeAt = (x, y) => {
    const el = document.elementFromPoint(x, y);
    const item = el && el.closest("[data-nav-route]");
    return item && listRef.current.contains(item)
      ? item.getAttribute("data-nav-route")
      : null;
  };

  const select = route => {
    onClose();
    if (normalizePath(route) !== normalizePath(window.location.pathname)) {
      navigate(route);
    }
  };

  const onPointerDown = e => {
    if (e.button !== 0 || activePointer.current !== null) return;
    const route = routeAt(e.clientX, e.clientY);
    if (!route) return;
    activePointer.current = e.pointerId;
    setPressedRoute(route);
    // keep receiving move/up events even when the finger leaves the item
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = e => {
    if (e.pointerId !== activePointer.current) return;
    const route = routeAt(e.clientX, e.clientY);
    if (route !== pressedRef.current) setPressedRoute(route);
  };

  const onPointerUp = e => {
    if (e.pointerId !== activePointer.current) return;
    activePointer.current = null;
    const route = routeAt(e.clientX, e.clientY);
    setPressedRoute(null);
    // defer so any follow-up click is dispatched while the overlay is still
    // mounted (and swallowed by onClickCapture), not on the page behind it
    if (route) selectTimer.current = setTimeout(() => select(route), 0);
  };

  const onPointerCancel = e => {
    if (e.pointerId !== activePointer.current) return;
    activePointer.current = null;
    setPressedRoute(null);
  };

  // suppress the synthesized mouse events + click after a touch selection
  const onTouchEnd = e => {
    // (pointerup has already cleared activePointer by the time touchend fires)
    if (e.cancelable && e.target.closest("[data-nav-route]"))
      e.preventDefault();
  };

  // Pointer events already handled mouse/touch selection, so swallow pointer
  // clicks before GatsbyLink sees them (avoids double navigation). Keyboard
  // activation (detail === 0) still navigates via the link and closes the menu.
  const onClickCapture = e => {
    if (e.detail !== 0) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      onClose();
    }
  };

  const itemBase = `${textStyle} select-none [-webkit-touch-callout:none] [-webkit-tap-highlight-color:transparent]`;

  return (
    <div
      ref={overlayRef}
      className="overflow-x-hidden overflow-y-auto z-50 fixed top-0 left-0 w-full h-full outline-0 mobile-nav"
    >
      <div className="text-Shades-0 h-full justify-center bg-Shades-50 items-start relative">
        <div className="flex flex-col justify-start items-center">
          <div className="flex flex-row pt-5 w-full justify-between opacity-90">
            <div></div>
            <Link className="ml-12" to="/" onClick={onClose}>
              <img alt="hmcc logo" className={logoStyle} src={hmccLogo} />
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="mr-4 flex justify-center items-center"
            >
              <img alt="" src={x} />
            </button>
          </div>
          <div
            ref={listRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            onTouchEnd={onTouchEnd}
            onClickCapture={onClickCapture}
            className={`w-full flex flex-col items-start ${
              dragEnabled ? "touch-none" : ""
            }`}
          >
            {browseList.map(({ title, route }) => {
              const isCurrent = normalizePath(route) === normalizePath(path);
              const isPressed = pressed === route;
              if (route === "/new") {
                return (
                  <Link
                    key={`browseLink-mobile-${title}`}
                    to={route}
                    data-nav-route={route}
                    className={`${itemBase} w-full text-left flex items-center text-xl h-[75px] px-5 border-b-[0.5px] ${
                      isCurrent || isPressed ? "font-extrabold" : ""
                    }`}
                  >
                    <div
                      className={`w-[90vw] py-2 px-9 shadow-md rounded-lg tracking-[0.96px] border-2 ${
                        isPressed
                          ? "bg-Accent-500/40 border-Accent-500"
                          : `border-Accent-500 ${
                              isCurrent ? "bg-Accent-500" : ""
                            }`
                      }`}
                    >
                      I&apos;m New
                    </div>
                  </Link>
                );
              }
              return (
                <Link
                  key={`browseLink-mobile-${title}`}
                  to={route}
                  data-nav-route={route}
                  className={`${itemBase} py-2 px-4 w-full text-left flex items-center pl-[56px] text-xl h-[75px] border-b-[0.5px] last:border-none ${
                    isPressed
                      ? "font-extrabold bg-Primary-50"
                      : isCurrent
                      ? "font-extrabold bg-Primary-300"
                      : "font-medium"
                  }`}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const path =
    (typeof window !== "undefined" && window.location.pathname) || "";
  const containerStyle =
    "flex flex-row h-[60px] lg:h-[100px] relative flext-start bg-Primary-700 items-center justify-between px-4 lg:pt-[40px] lg:pb-[17px] 2xl:px-[65px] [@media(min-width:1140px)]:gap-[40px] [@media(min-width:1440px)]:gap-[100px] [@media(min-width:1600px)]:gap-[210px] position-fixed";
  const dropDownStyle = "w-[40px] h-[40px] mb-0";
  const borderStyle =
    "flex items-center py-2 px-4 md:px-6 rounded-lg border-2 border-[#FF8069] shadow-md";

  const closeMenu = React.useCallback(() => setIsOpen(false), []);

  // lock page scroll while the menu is open
  React.useEffect(() => {
    if (!isOpen) return undefined;
    const htmlElement = document.querySelector("html");
    const bodyElement = document.querySelector("body");
    htmlElement.classList.add("menu__Html--open");
    bodyElement.classList.add("menu__Body--open");
    return () => {
      htmlElement.classList.remove("menu__Html--open");
      bodyElement.classList.remove("menu__Body--open");
    };
  }, [isOpen]);

  return (
    <header>
      <div className={`${containerStyle}`}>
        <div className="flex flex-row w-full justify-between lg:hidden relative">
          <Link to="/">
            <img alt="hmcc logo" className={logoStyle} src={hmccLogo} />
          </Link>
          <Link
            to="/"
            className={`${textStyle} text-center min-w-max font-semibold`}
          >
            HARVEST MISSION <br /> COMMUNITY CHURCH
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            className="ml-10"
          >
            <img alt="" className={dropDownStyle} src={dropDown} />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-4 md:gap-3 shrink-0">
          <Link to="/">
            <img alt="hmcc logo" className={logoStyle} src={hmccLogo} />
          </Link>
          <Link to="/" className={`${textStyle} min-w-max font-semibold`}>
            HARVEST MISSION <br /> COMMUNITY CHURCH
          </Link>
        </div>

        {isOpen && <MobileNav path={path} onClose={closeMenu} />}

        <div className="flex-row items-center gap-4 hidden lg:flex lg:gap-3 [@media(min-width:1140px)]:gap-8 [@media(min-width:1440px)]:gap-11 shrink-0">
          <div className="flex flex-row items-center justify-items-center gap-2 md:gap:4 [@media(min-width:1140px)]:gap-4 [@media(min-width:1280px)]:gap-6 [@media(min-width:1440px)]:gap-11">
            {browseList.map(({ title, route }) => {
              if (route === "/new") {
                return (
                  <Link
                    key={`browseLink-${title}`}
                    to={route}
                    className={`hover:bg-Accent-500 ${borderStyle} min-w-max ${textStyle} ${
                      route + "/" === path ? "font-extrabold" : ""
                    } font-bold hover:font-extrabold tracking-[0.96px]`}
                  >
                    I&apos;m New
                  </Link>
                );
              } else {
                return (
                  <Link
                    key={`browseLink-${title}`}
                    to={route}
                    className={`${
                      route === "/" ? "hidden" : ""
                    } min-w-max ${textStyle} ${
                      route + "/" === path
                        ? "font-extrabold hover:bg-Primary-300 py-2 px-4 rounded-default"
                        : "font-normal hover:bg-Primary-300 py-2 px-4 rounded-default"
                    } tracking-[0.96px]`}
                  >
                    {title}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
