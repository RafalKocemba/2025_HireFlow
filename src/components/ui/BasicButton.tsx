import { Icons } from "./BasicIcon";

type BasicButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  iconStyles?: string;
  icon?: Icons | null;
};

const VARIANTS = {
  primary:
    "text-basic-100 bg-primary-100 border border-primary-100 shadow-primary font-medium md:hover:bg-primary-200 md:hover:border-primary-200",
  secondary:
    "border border-basic-900 shadow-secondary md:hover:bg-secondary-200",
};

export function BasicButton({
  className = "",
  onClick,
  children,
  variant,
  icon = null,
  iconStyles = "",
}: BasicButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-[3.13rem] px-12 py-5 text-sm transition md:text-base md:hover:shadow-none ${VARIANTS[variant]} ${className}`}
    >
      {children}
      {icon && <i className={`icon-${icon} ${iconStyles}`}></i>}
    </button>
  );
}
