import { BasicIcon } from "./ui/BasicIcon";

type NotifierProps = {
  label: string;
  className?: string;
};

export function Notifier({ label, className = "" }: NotifierProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded-[.31rem] bg-additional-200 px-3 py-1 ${className}`}
    >
      <BasicIcon icon="notice" iconStyles="text-additional-300" />
      <p className="text-[.63rem] font-light text-black">{label}</p>
    </div>
  );
}
