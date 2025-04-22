import { BasicImage } from "../../components/ui/BasicImage";
import angularLogo from "../../assets/images/logos/angular.svg";
import jsLogo from "../../assets/images/logos/js.svg";
import reactLogo from "../../assets/images/logos/react.svg";
import tsLogo from "../../assets/images/logos/ts.svg";
import vueLogo from "../../assets/images/logos/vue.svg";

const LOGO_MAP: LogosTypes = {
  javascript: jsLogo,
  typescript: tsLogo,
  react: reactLogo,
  vue: vueLogo,
  angular: angularLogo,
};

export type LogosTypes = {
  [key: string]: string;
};

export type TechnologiesTypes = {
  [key: string]: boolean;
};

type TechnologiesProps = {
  technologies: TechnologiesTypes;
  onTechChange: (key: string) => void;
};

export function Technologies({
  technologies,
  onTechChange,
}: TechnologiesProps) {
  return (
    <div className="flex flex-col justify-center gap-7 rounded-2xl bg-basic-100 p-5 md:p-8">
      <h3 className="text-center text-lg md:text-xl">Technologies</h3>
      <div className="flex justify-center gap-5">
        {Object.entries(technologies).map(([key, val]) => (
          <div
            key={key}
            onClick={() => onTechChange(key)}
            className="h-[1.88rem] w-[1.88rem]"
          >
            <BasicImage
              desktop={LOGO_MAP[key]}
              alt={key}
              title={key}
              height={30}
              width={30}
              className={`h-full w-full cursor-pointer object-contain ${!val && "grayscale"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
