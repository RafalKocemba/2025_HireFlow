import { BasicIcon, Icons } from "./BasicIcon";

type BaseInputProps = {
  variant: "primary" | "secondary" | "icon" | "search";
  name: string;
  defaultValue?: string;
  limit?: number;
  placeholder?: string;
  className?: string;
  label?: string;
  value?: string;
  icon?: Icons;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconStyles?: string;
};

const VARIANTS = {
  primary:
    "text-center font-semibold text-xl md:text-4xl md:text-left mb-1 md:hover:bg-basic-300",
  secondary:
    "text-center text-base font-light mb-2 md:text-2xl md:text-left md:hover:bg-basic-300",
  icon: "text-sm my-1 font-light md:text-xl md:hover:bg-basic-300",
  search: "text-xl rounded-[3.56rem] bg-basic-300 rounded-s-xl py-3",
};

export function BasicInput({
  name,
  defaultValue,
  placeholder = "",
  className = "",
  limit,
  value,
  icon,
  onChange,
  variant = "primary",
  iconStyles = "",
}: BaseInputProps) {
  return (
    <div className={`flex items-center gap-1 ${className} `}>
      {["icon", "search"].includes(variant) && (
        <BasicIcon icon={icon} iconStyles={iconStyles} />
      )}
      <input
        type="text"
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        maxLength={limit}
        value={value}
        onChange={onChange}
        autoComplete="new-field"
        spellCheck="false"
        className={`${VARIANTS[variant]} w-full max-w-full rounded-lg bg-basic-100 px-2 py-1 transition-colors duration-100 placeholder:text-basic-600 focus:bg-basic-300 focus:outline-none focus:placeholder:text-basic-300`}
      />
    </div>
  );
}
