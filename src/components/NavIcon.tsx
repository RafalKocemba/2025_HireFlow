import { BasicIcon, Icons } from "./ui/BasicIcon";

type NavIconProps = {
  icon: Icons;
  onClick: () => void;
  animationColor?: "positive" | "informative" | "notice" | "negative";
  strikethrough?: boolean;
  className?: string;
};

const VARIANT = {
  positive: {
    animation: "hover:animate-pulse-positive",
    border: "md:hover:border-green-500",
    text: "md:group-hover:text-green-600",
  },
  informative: {
    animation: "hover:animate-pulse-informative",
    border: "md:hover:border-sky-500",
    text: "md:group-hover:text-sky-600",
  },
  notice: {
    animation: "hover:animate-pulse-notice",
    border: "md:hover:border-amber-500",
    text: "md:group-hover:text-amber-600",
  },
  negative: {
    animation: "hover:animate-pulse-negative",
    border: "md:hover:border-red-500",
    text: "md:group-hover:text-red-600",
  },
};

export function NavIcon({
  icon,
  onClick,
  animationColor = "positive",
  strikethrough = false,
  className = "",
}: NavIconProps) {
  const { animation, border, text } = VARIANT[animationColor];

  return (
    <button
      onClick={onClick}
      className={`group relative flex h-11 w-11 items-center justify-center rounded-full border border-basic-900 transition-all duration-300 ease-in-out ${animation} ${border} ${className} ${strikethrough && "after:absolute after:left-0 after:top-1/2 after:h-0.5 after:w-full after:-rotate-45 after:transform after:bg-red-500"}`}
    >
      <div className={`transition-colors duration-300 ease-in-out ${text}`}>
        <BasicIcon icon={icon} />
      </div>
    </button>
  );
}
