import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

function DropdownFilter({ options, searchParam, disabled }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParamOption = searchParams.get(searchParam);

  let paramOption;
  if (urlParamOption) {
    paramOption = options.find((o) => o.value === urlParamOption);
  }

  const [selectedOption, setSelectedOption] = useState(
    paramOption ?? (options.length > 0 ? options[0] : ""),
  );

  function onItemClick(option) {
    setSelectedOption(option);
    searchParams.set(searchParam, option.value);
    setSearchParams(searchParams);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center justify-between gap-2 rounded-lg border-[1px] border-solid border-slate-300 bg-slate-100 px-2 py-1.5 shadow-sm"
          disabled={disabled}
        >
          <span>{selectedOption.label}</span>
          <HiChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-white">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onItemClick(option)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownFilter;
