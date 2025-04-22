import { CandidatesDashboard } from "./CandidatesDashboard/CandidatesDashboard";
import { LOCAL_STORAGE_CANDIDATES_KEY } from "../constants/constants";
import { StartScreen } from "./StartScreen/StartScreen";
import { handleLocalStorage } from "../utils/handleLocalStorage";
import { useConfigContext } from "../hooks/useConfigContext";

const { getLocalItem } = handleLocalStorage(LOCAL_STORAGE_CANDIDATES_KEY);

export function Layout() {
  const { config } = useConfigContext();

  return config.startView && !getLocalItem() ? (
    <StartScreen />
  ) : (
    <CandidatesDashboard />
  );
}
