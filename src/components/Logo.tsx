import { BasicImage } from "./ui/BasicImage";
import LOGO from "../assets/images/logo.svg";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <BasicImage
      desktop={LOGO}
      width={208}
      height={53}
      alt="HireFlow Logo"
      className={`max-w-36 md:w-full md:max-w-52 ${className}`}
    />
  );
}
