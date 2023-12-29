import React, { useState, useEffect } from "react";

import { ArrowDropDown } from "../svgs";

const ComboBox = ({
  label,
  options,
  handleChange: navigateChange,
  filterValue,
}) => {
  const id = `${label.toLowerCase().replace(/\s+/g, "-")}-combo-box-container`;
  console.warn(filterValue);
  const foundItem = filterValue
    ? options.find(({ value }) => value.length && filterValue.includes(value))
    : null;
  console.warn(foundItem);
  const [found, setFound] = useState(foundItem);
  const [anchorElement, setAnchorElement] = useState(false);
  const [list, setList] = useState(options);
  useEffect(() => {
    document.body.addEventListener("click", handleCloseDropDown);

    return function cleanup() {
      window?.removeEventListener("click", handleCloseDropDown);
    };
  }, [id]);
  const handleCloseDropDown = ({ target }) => {
    const currentContainer = document.getElementById(id);
    const legend = currentContainer.querySelector("legend");
    const fieldset = currentContainer.querySelector("fieldset");
    const label = currentContainer.querySelector("label");
    const value = currentContainer.querySelector("input")?.dataset?.url;
    if (
      target !== currentContainer &&
      !target.closest(`#${id}`) &&
      !value.length
    ) {
      legend.classList.remove("max-w-full");
      fieldset.classList.remove("border-highlight");
      label.classList.add("scale-100", "translate-y-3");
      label.classList.remove("label-highlight", "scale-75", "-translate-y-2");
      setAnchorElement(false);
    }
  };
  const handleClick = () => {
    const legend = document.getElementById(id).querySelector("legend");
    legend.classList.add("max-w-full");
    const fieldset = document.getElementById(id).querySelector("fieldset");
    fieldset.classList.add("border-highlight");
    const label = document.getElementById(id).querySelector("label");
    label.classList.remove("scale-100", "translate-y-3");
    label.classList.add("label-highlight", "scale-75", "-translate-y-2");

    setAnchorElement(!found ? !anchorElement : true);
    setFound(null);
  };
  const handleChange = ({ target: { value: targetValue } }) => {
    if (targetValue === "") {
      setList(options);
    } else {
      const filteredList = list.filter(({ value }) => {
        const search = targetValue.toLowerCase();
        return value.toLowerCase().includes(search);
      });
      setList(filteredList);
    }
  };

  const handleSelection = ({ target }, { label, value }) => {
    target.parentElement.querySelectorAll("li").forEach(element => {
      element.classList.remove("selected-item");
    });
    if (target.dataset.value !== "") {
      target.classList.add("selected-item");
      document.getElementById(id).querySelector("input").value = label;
    }
    document.getElementById(id).querySelector("input").dataset.url = value;
    setAnchorElement(false);
    navigateChange();
  };
  return (
    <div
      id={id}
      className="max-w-[8rem] [@media(min-width:375px)]:max-w-[11.25rem] w-full relative combo-box-container"
    >
      <div>
        <div className="inline-flex flex-col relative w-full align-top">
          <label
            id={`combo-box-${label}`}
            className={`font-ubuntu font-medium tracking-medium-wide block origin-top-left whitespace-nowrap overflow-hidden text-ellipsis max-w-full pr-[26px] absolute left-0 top-0 z-[3] pointer-events-none transition-[color,_transfrom,_max-width] duration-200 ease-out translate-x-3 ${
              found
                ? "label-highlight -translate-y-2 scale-75"
                : "translate-y-3  scale-100"
            }`}
          >
            {label}
          </label>
          <div
            onClick={handleClick}
            className="px-3 pr-[2.4375rem] py-1 flex-wrap cursor-text inline-flex items-center w-full relative rounded-sm"
          >
            <input
              autoComplete="off"
              type="text"
              role="combobox"
              aria-invalid="false"
              aria-autocomplete="list"
              aria-expanded="false"
              autoCapitalize="none"
              spellCheck="false"
              aria-controls={`combo-box-${label
                .toLowerCase()
                .replace(/\s+/g, "-")}-list`}
              onChange={handleChange}
              className="w-0 min-w-[30px] grow text-ellipsis opacity-100 block relative z-[2] outline-0 py-2"
              value={found ? found?.label : ""}
              data-url={found ? found.value : ""}
            />
            <div className="right-[9px] absolute top-1/2 -translate-y-[14px]">
              <button
                type="button"
                className="inline-flex items-center justify-center relative outline-0 -mr-[2px] cursor-pointer select-none align-middle text-center text-2xl rounded-[50%] overflow-visible p-[2px]"
              >
                <ArrowDropDown />
                <span className="overflow-hidden pointer-events-none absolute z-0 inset-0 rounded-[50%]" />
              </button>
            </div>
            <fieldset
              className={`m-0 text-left absolute inset-0 -top-[4px] px-3 py-1 border-solid border-[1px] overflow-hidden rounded-sm z-[1] ${
                found && "border-highlight"
              }`}
            >
              <legend
                className={`overflow-hidden block invisible whitespace-nowrap ${
                  !found ? "max-w-[0.01px]" : "max-w-full"
                } transition-[max-width] duration-[50ms] ease-out min-h-[11px] text-sm pointer-events-none`}
              >
                <span className="px-[5px] inline-block opacity-0 visible">
                  {label}
                </span>
              </legend>
            </fieldset>
          </div>
        </div>
      </div>
      {anchorElement && (
        <div
          role="presentation"
          className="absolute top-0 left-0 w-full z-[1300] translate-y-12"
        >
          <div className="bg-Shades-0 transition-[box-shadow] duration-300 rounded-sm shadow-[0_2px_1px_-1px_rgba(0,0,0,0.2),_0_1px_1px_0_rgba(0,0,0,0.14),_0_1px_3px_0_rgba(0,0,0,0.12)] tracking-medium-wide overflow-auto">
            <ul
              className="list-none m-0 py-2 max-h-[40vh] overflow-auto relative"
              id={`combo-box-${label.toLowerCase().replace(/\s+/g, "-")}-list`}
            >
              {list.length > 1 ? (
                list.map(({ label, value }, index) => (
                  <li
                    key={`${label.toLowerCase().replace(/\s+/g, "-")}-${
                      index + 1
                    }`}
                    className={`font-ubuntu flex overflow-hidden justify-start items-center cursor-pointer py-[6px] px-4 outline-0 hover:bg-[rgba(0,0,0,0.04)] ${
                      label.toLowerCase().includes("select")
                        ? "font-medium"
                        : "font-normal"
                    }`}
                    data-option-value={value}
                    onClick={evt => handleSelection(evt, { label, value })}
                  >
                    {label}
                  </li>
                ))
              ) : (
                <li className="flex overflow-hidden justify-start items-center cursor-pointer py-[6px] px-4 outline-0 text-[gray]">
                  No Options
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComboBox;
