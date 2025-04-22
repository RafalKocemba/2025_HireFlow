import { CandidateList } from "./CandidateList";
import { CandidateTile } from "./CandidateTile";
import { Container } from "../../components/Container";
import { EmptyList } from "./EmptyList";
import { Header } from "./Header";
import { MobileBottomPanel } from "./MobileBottomPanel";
import { NavIcon } from "../../components/NavIcon";
import { Notes } from "./Notes";
import { SideBar } from "./SideBar";
import { useCandidateContext } from "../../hooks/useCandidateContext";
import { useCandidateFiltering } from "../../hooks/useCandidateFiltering";
import { useConfigContext } from "../../hooks/useConfigContext";
import { useState } from "react";

export function CandidatesDashboard() {
  const { state } = useCandidateContext();
  const { config } = useConfigContext();
  const [isOpen, setIsOpen] = useState(true);
  const isEmpty = !Object.values(state ?? {}).length;

  const filteredCandidates = useCandidateFiltering(state);

  return (
    <main
      className="centered-container text-basic-900"
      key={`refresh-key-${config.refreshKey}`}
    >
      <Header />
      <NavIcon
        icon="settings"
        onClick={() => setIsOpen((prev) => !prev)}
        animationColor="informative"
        className="hidden md:flex"
      />
      <Container
        className={`mt-5 h-full w-full transition-all duration-500 ease-in-out md:grid md:items-start ${isOpen ? "md:grid-cols-[1fr_3fr] md:gap-10" : "md:grid-cols-[0fr_1fr] md:gap-0"}`}
      >
        <SideBar
          className={`${isOpen ? "translate-y-full p-5 md:transform-none" : "translate-y-[0] md:transform-none md:p-0 md:opacity-0"}`}
        />
        <Container className="h-full cursor-pointer overflow-hidden transition-all duration-500">
          {!isEmpty ? (
            <CandidateList>
              {filteredCandidates.map((candidateData, index) => (
                <CandidateTile
                  key={candidateData.id ?? index}
                  candidateData={candidateData}
                />
              ))}
            </CandidateList>
          ) : (
            <EmptyList />
          )}
        </Container>
      </Container>
      <Notes />
      <MobileBottomPanel isOpenedFilters={() => setIsOpen((prev) => !prev)} />
    </main>
  );
}
