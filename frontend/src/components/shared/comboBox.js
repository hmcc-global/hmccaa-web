import React, { useState, useEffect, forwardRef } from "react";
import { ArrowDropDown, CloseIcon } from "../svgs";
import "../../css/comboBox.css";

const ComboBox = forwardRef(
  (
    { label, options, handleChange: navigateChange, currentlySelected },
    ref
  ) => {
    const foundItem = currentlySelected
      ? options.find(({ value }) => value.length && currentlySelected === value)
      : null;
    const [comboBoxState, setComboBoxState] = useState({
      show: false,
      found: foundItem,
    });
    const [list, setList] = useState(options);
    useEffect(() => {
      const handleClose = ({ target }) => {
        if (ref && ref.current && !ref.current.contains(target)) {
          const value = ref.current.querySelector("input").dataset.url;
          if (value && !value.length) {
            ref.current.classList.remove("open");
            ref.current.classList.add("close");
          }
          setComboBoxState({ ...comboBoxState, show: false });
        }
      };
      document.body.addEventListener("click", handleClose);

      return function cleanup() {
        window?.removeEventListener("click", handleClose);
      };
    }, [ref, comboBoxState]);
    const handleOpen = () => {
      const container = ref?.current;
      container.classList.remove("close");
      container.classList.add("open");
      const height = document.querySelector("html").clientHeight - 5;
      const comboBoxListHeight = container
        .querySelector(".presentation")
        .getBoundingClientRect().height;
      const comboBoxBottom = container
        .querySelector(".combo-box-wrapper")
        .getBoundingClientRect().bottom;
      const position =
        comboBoxBottom + comboBoxListHeight > height
          ? "position-bottom"
          : "position-top";
      container.classList.add(position);
      setComboBoxState({
        show: !comboBoxState.found ? !comboBoxState.show : true,
        found: null,
        position,
      });
    };
    const handleKeyPress = ({ target: { value } }) => {
      if (value === "") {
        setList(options);
      } else {
        const filteredList = list.filter(({ label }) => {
          const search = value.toLowerCase().trim();
          return label.toLowerCase().includes(search);
        });
        setList(filteredList);
      }
      setComboBoxState({
        ...comboBoxState,
        found: { label: value, value: "" },
      });
    };

    const handleSelection = ({ target }, { label, value }) => {
      target.parentElement.querySelectorAll("li").forEach(element => {
        element.classList.remove("selected-item");
        element.ariaSelected = "false";
      });
      if (target.dataset.value !== "") {
        target.classList.add("selected-item");
        target.ariaSelected = "true";
        ref.current.querySelector("input").value = label;
      }
      ref.current.querySelector("input").dataset.url = value;
      setComboBoxState({ show: false, found: { label, value } });
      navigateChange();
    };

    const handleClear = evt => {
      handleSelection(evt, {
        label: "",
        value: "",
      });
    };

    return (
      <div
        ref={ref}
        className={`max-w-[8rem] [@media(min-width:375px)]:max-w-[11.25rem] w-full relative combo-box-container ${
          (comboBoxState.show && "open") || "close"
        } ${(comboBoxState.found && "selected-value") || "select-value"} ${
          (!comboBoxState.position && "position-top") || comboBoxState.position
        }`}
      >
        <div className="combo-box-wrapper">
          <div className="inline-flex flex-col relative w-full align-top">
            <label
              id={`combo-box-${label}`}
              className="font-ubuntu font-medium tracking-medium-wide block origin-top-left whitespace-nowrap overflow-hidden text-ellipsis max-w-full pr-[26px] absolute left-0 top-0 z-[3] pointer-events-none transition-[color,_transfrom,_max-width] duration-200 ease-out translate-x-3"
            >
              {label}
            </label>
            <div
              onClick={foundItem ? handleClear : handleOpen}
              className="px-3 pr-[2.4375rem] py-1 flex-wrap cursor-pointer inline-flex items-center w-full relative rounded-sm"
            >
              <input
                autoComplete="off"
                type="text"
                disabled={foundItem}
                role="combobox"
                aria-invalid="false"
                aria-autocomplete="list"
                aria-expanded="false"
                autoCapitalize="none"
                spellCheck="false"
                aria-controls={`combo-box-${label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}-list`}
                onChange={handleKeyPress}
                className="w-0 min-w-[30px] grow text-ellipsis opacity-100 block relative z-[2] outline-0 py-2"
                value={comboBoxState.found ? comboBoxState.found?.label : ""}
                data-url={comboBoxState.found ? comboBoxState.found.value : ""}
              />
              <div className="right-[9px] absolute top-1/2 -translate-y-[14px]">
                <button
                  type="button"
                  className="inline-flex items-center justify-center relative outline-0 -mr-[2px] cursor-pointer select-none align-middle text-center text-2xl rounded-[50%] overflow-visible p-[2px]"
                >
                  {foundItem ? <CloseIcon /> : <ArrowDropDown />}
                  <span className="overflow-hidden pointer-events-none absolute z-0 inset-0 rounded-[50%]" />
                </button>
              </div>
              <fieldset className="m-0 text-left absolute inset-0 -top-[4px] px-3 py-1 border-solid border-[1px] overflow-hidden rounded-sm z-[1]">
                <legend className="overflow-hidden block invisibility whitespace-nowrap transition-[max-width] duration-[50ms] ease-out min-h-[11px] text-sm pointer-events-none">
                  <span className="px-[5px] inline-block opacity-0 visible">
                    {label}
                  </span>
                </legend>
              </fieldset>
            </div>
          </div>
        </div>

        <div
          role="presentation"
          className="presentation absolute left-0 w-full translate-y-12"
        >
          <div className="bg-Shades-0 transition-[box-shadow] duration-300 rounded-sm shadow-[0_2px_1px_-1px_rgba(0,0,0,0.2),_0_1px_1px_0_rgba(0,0,0,0.14),_0_1px_3px_0_rgba(0,0,0,0.12)] tracking-medium-wide overflow-auto">
            {list.length ? (
              <ul
                role="listbox"
                aria-labelledby={`combo-box-${label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}-list`}
                className="list-none py-2 max-h-[40vh] overflow-auto relative m-0"
                id={`combo-box-${label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}-list`}
              >
                {list.map(({ label, value }, index) => (
                  <li
                    key={`${label.toLowerCase().replace(/\s+/g, "-")}-${
                      index + 1
                    }`}
                    role="option"
                    aria-disabled="false"
                    aria-selected="false"
                    tabIndex="-1"
                    className="font-ubuntu flex overflow-hidden justify-start items-center cursor-pointer py-[6px] px-4 outline-0 hover:bg-[rgba(0,0,0,0.04)]"
                    data-option-value={value}
                    onClick={evt => handleSelection(evt, { label, value })}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            ) : (
              <div
                role="presentation"
                className="flex overflow-hidden justify-start items-center cursor-pointer py-[6px] px-4 outline-0 text-[gray]"
              >
                No Options
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default ComboBox;
