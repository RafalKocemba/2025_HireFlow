import { useEffect, useRef, useState } from "react";

import { BasicImage } from "./BasicImage";
import arrow from "../../assets/images/arrow.svg";

type CustomDropdownProps = {
  name: string;
  values: {
    label: string;
    value: string;
  }[];
  className?: string;
  label?: string;
  defaultValue?: string;
  onSelect?: (value: string) => void;
};

export function BasicDropdown({
  name,
  className = "",
  label,
  values,
  defaultValue,
  onSelect,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || values[0]?.value || "",
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    values.find((v) => v.value === selectedValue)?.label || "";

  useEffect(() => {
    setSelectedValue(defaultValue || values[0]?.value || "");
  }, [defaultValue, values]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleOptionSelect(value: string) {
    if (value === selectedValue && isOpen) {
      setIsOpen(false);
      return;
    }

    setSelectedValue(value);
    setIsOpen(false);

    if (onSelect) {
      onSelect(value);
    }
  }

  return (
    <div className={`flex flex-col ${className}`} ref={dropdownRef}>
      {label && (
        <label
          htmlFor={name}
          className="mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input type="hidden" name={name} value={selectedValue} />
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-[.63rem] border bg-basic-300 px-4 py-[.88rem] text-left font-extralight text-basic-400 transition-colors hover:border-basic-900 focus:border-basic-900"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span>{selectedLabel}</span>
          <BasicImage
            className={`h-5 w-5 transform text-basic-600 transition-transform duration-150 ${
              isOpen ? "rotate-180" : ""
            }`}
            desktop={arrow}
            alt="arrow"
            width={10}
            height={10}
          />
        </button>
        <div
          className={`absolute z-10 w-full origin-top rounded-md bg-white shadow-lg transition-all duration-150 ease-in-out ${
            isOpen
              ? "pointer-events-auto scale-y-100 transform opacity-100"
              : "pointer-events-none h-0 scale-y-0 transform opacity-0"
          }`}
        >
          <ul
            className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-h-60 w-full overflow-hidden overflow-y-auto rounded-[.63rem] bg-basic-100 px-1 py-3"
            style={{
              scrollbarWidth: "thin",
              msOverflowStyle: "none",
            }}
          >
            {values.map((option, index) => (
              <li
                key={index}
                className={`cursor-pointer rounded-[.63rem] px-[1.13rem] py-[.63rem] font-extralight hover:bg-basic-300 ${
                  selectedValue === option.value ? "bg-basic-500" : ""
                } `}
                onClick={() => handleOptionSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
