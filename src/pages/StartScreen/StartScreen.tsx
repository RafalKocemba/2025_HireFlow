import { BasicButton } from "../../components/ui/BasicButton";
import { BasicImage } from "../../components/ui/BasicImage";
import { Container } from "../../components/Container";
import { LOCAL_STORAGE_CONFIG_KEY } from "../../constants/constants";
import { Link } from "react-router";
import { Logo } from "../../components/Logo";
import ROCKET_D from "../../assets/images/rocket/rocket_desktop.png";
import ROCKET_M from "../../assets/images/rocket/rocket_mobile.png";
import { WelcomeText } from "./WelcomeText";
import { handleLocalStorage } from "../../utils/handleLocalStorage";
import { useConfigContext } from "../../hooks/useConfigContext";

const { setLocalItem } = handleLocalStorage(LOCAL_STORAGE_CONFIG_KEY);

export function StartScreen() {
  const { setConfig } = useConfigContext();

  function handleViewConfig() {
    setConfig((prev) => {
      const newConfig = { ...prev, startView: false };
      setLocalItem(newConfig);
      return newConfig;
    });
  }

  return (
    <main className="centered-container py-10 text-basic-900">
      <Logo className="mb-7" />
      <Container className="md:grid md:grid-cols-[auto_auto] md:items-center md:gap-10">
        <BasicImage
          mobile={ROCKET_M}
          desktop={ROCKET_D}
          width={320}
          height={320}
          alt="Image of a rocket spacecraft"
          className="m-auto my-4 w-full max-w-16 object-contain md:order-1 md:my-0 md:max-w-max"
        />
        <Container className="md:max-w-[43rem]">
          <WelcomeText />
          <Container className="mt-5 md:mt-24 md:flex md:justify-evenly md:gap-5">
            <Link to="/form">
              <BasicButton
                variant="primary"
                icon="plus"
                className="mb-3 w-full md:mb-0 md:w-auto"
                iconStyles="font-semibold text-sm"
              >
                Add new applicant
              </BasicButton>
            </Link>
            <BasicButton
              variant="secondary"
              onClick={handleViewConfig}
              icon="arrow-right-small"
              className="w-full md:w-auto"
              iconStyles="leading-none text-sm"
            >
              Go to applicant list
            </BasicButton>
          </Container>
        </Container>
      </Container>
    </main>
  );
}
