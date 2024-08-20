import { DropdownProps } from "@/types";
import { FC, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

export const Dropdown: FC<DropdownProps> = ({
  icon,
  label,
  options,
  onChange,
  loading,
  error: ParentError,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const [error, setError] = useState<string>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    if (options?.length === 0 && !loading) {
      setError("Please select a season");
      return;
    }

    if (options?.length > 0) {
      setError("");
    }
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option.displayValue);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left w-64 rounded-md"
    >
      <div
        onClick={toggleDropdown}
        className="inline-flex items-center w-full border rounded-md border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
      >
        <span className="mr-3 mb-0.5">{icon}</span>
        <span
          className={`${
            (!selectedOption || loading) && "text-gray-400"
          } grow w-40 truncate`}
        >
          {loading
            ? "Fetching schedule...."
            : selectedOption || `Select ${label}`}
        </span>
        <span className="ml-2">
          <FaChevronDown />
        </span>
      </div>
      <div className="absolute text-xs text-red h-4 mt-1">
        {!!error && error}
        {!!ParentError && ParentError}
      </div>

      {isOpen && !loading && (
        <ul className="absolute z-[9999] w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg h-96 overflow-scroll">
          {options.map((option, index) => (
            <li
              key={`${option.id}_${index}`}
              onClick={() => handleOptionClick(option)}
              className="text-sm cursor-pointer py-2 px-4 hover:bg-gray-100"
            >
              {option.displayValue}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
