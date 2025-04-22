import { BasicIcon } from "./ui/BasicIcon";

type AvatarProps = {
  name?: string | null;
  color?: string | null;
  variant?: "small" | "regular";
};

const VARIANTS = {
  small: "h-16 w-16 min-w-16",
  regular: "h-20 w-20 min-w-20",
};

export function Avatar({
  name = null,
  color = null,
  variant = "regular",
}: AvatarProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full text-3xl text-basic-100 ${VARIANTS[variant]}`}
      style={{ backgroundColor: color ?? "#838384" }}
    >
      {name ? name[0].toUpperCase() : <BasicIcon icon="plus" />}
    </div>
  );
}
