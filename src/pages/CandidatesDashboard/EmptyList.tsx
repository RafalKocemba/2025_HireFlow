import {
  LOCAL_STORAGE_CANDIDATES_KEY,
  LOCAL_STORAGE_NOTES_KEY,
} from "../../constants/constants";
import {
  SAMPLE_CANDIDATES_DATA,
  SAMPLE_NOTES_DATA,
} from "../../constants/sampleData";

import { BasicButton } from "../../components/ui/BasicButton";
import { BasicImage } from "../../components/ui/BasicImage";
import { Container } from "../../components/Container";
import EMPTY_D from "../../assets/images/empty_list/empty_desktop.png";
import EMPTY_M from "../../assets/images/empty_list/empty_mobile.png";
import { Link } from "react-router";
import { handleLocalStorage } from "../../utils/handleLocalStorage";
import { useCandidateContext } from "../../hooks/useCandidateContext";
import { useConfigContext } from "../../hooks/useConfigContext";

const { setLocalItem: setCandidates } = handleLocalStorage(
  LOCAL_STORAGE_CANDIDATES_KEY,
);
const { setLocalItem: setNotes } = handleLocalStorage(LOCAL_STORAGE_NOTES_KEY);

export function EmptyList() {
  const { dispatch } = useCandidateContext();
  const { setConfig } = useConfigContext();

  function handleFillData() {
    dispatch({ type: "FILL_SAMPLE_DATA", payload: SAMPLE_CANDIDATES_DATA });
    setCandidates(SAMPLE_CANDIDATES_DATA);
    setNotes(SAMPLE_NOTES_DATA);
    setConfig((prev) => ({
      ...prev,
      refreshKey: prev.refreshKey + 1,
    }));
  }

  return (
    <section>
      <BasicImage
        mobile={EMPTY_M}
        desktop={EMPTY_D}
        width={366}
        height={696}
        alt="Empty folder image"
        className="m-auto min-h-[8rem] w-full max-w-[8rem] md:min-h-[20.13rem] md:w-auto md:max-w-none"
      />
      <h2 className="my-4 text-balance text-center font-extralight md:py-8 md:text-2xl">
        You don't have any candidates on your list yet. Click the button below
        to add your first candidate.
      </h2>
      <Container className="flex flex-col gap-3 md:flex-row md:justify-center">
        <Link to="/form">
          <BasicButton variant="primary" icon="plus-small" className="w-full">
            Add new candidate
          </BasicButton>
        </Link>
        <BasicButton onClick={handleFillData} variant="secondary">
          Fill with sample data
        </BasicButton>
      </Container>
    </section>
  );
}
