export type Icons =
  | "plus"
  | "arrow-up"
  | "add"
  | "arrow-left"
  | "arrow-left-small"
  | "arrow-right"
  | "arrow-right-small"
  | "email"
  | "filters"
  | "like"
  | "location"
  | "notice"
  | "phone"
  | "plus-small"
  | "portfolio"
  | "search"
  | "search-thin"
  | "settings"
  | "star"
  | "star-fill"
  | "trash"
  | "unlike";

type BasicIconProps = {
  icon?: Icons;
  iconStyles?: string;
};

export function BasicIcon({ icon = "plus", iconStyles = "" }: BasicIconProps) {
  return <i className={`icon-${icon} ${iconStyles}`}></i>;
}
