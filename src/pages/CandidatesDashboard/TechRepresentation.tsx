import { LogosTypes, TechnologiesTypes } from "../CandidateForm/Technologies";

import { BasicImage } from "../../components/ui/BasicImage";
import angularLogo from "../../assets/images/logos/angular.svg";
import jsLogo from "../../assets/images/logos/js.svg";
import reactLogo from "../../assets/images/logos/react.svg";
import tsLogo from "../../assets/images/logos/ts.svg";
import vueLogo from "../../assets/images/logos/vue.svg";

type TechRepresentationProps = {
  technologies: TechnologiesTypes;
};

const LOGO_MAP: LogosTypes = {
  javascript: jsLogo,
  typescript: tsLogo,
  react: reactLogo,
  vue: vueLogo,
  angular: angularLogo,
};

export function TechRepresentation({ technologies }: TechRepresentationProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {Object.entries(technologies).map(([key, val]) =>
        val ? (
          <BasicImage
            key={key}
            desktop={LOGO_MAP[key]}
            alt={key}
            height={30}
            width={30}
            className="h-5 w-5 object-contain"
          />
        ) : null,
      )}
    </div>
  );
}
