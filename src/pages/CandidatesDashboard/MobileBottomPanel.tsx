import { Link } from "react-router";
import { NavIcon } from "../../components/NavIcon";
import { useCandidateContext } from "../../hooks/useCandidateContext";
import { useConfigContext } from "../../hooks/useConfigContext";

type MobileBottomPanelProps = {
  isOpenedFilters: () => void;
};

export function MobileBottomPanel({ isOpenedFilters }: MobileBottomPanelProps) {
  const { dispatch } = useCandidateContext();
  const { setConfig } = useConfigContext();

  return (
    <section className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-between rounded-e-xl rounded-s-lg bg-basic-300 px-5 py-4 shadow-notes md:hidden">
      <NavIcon
        icon="settings"
        onClick={isOpenedFilters}
        animationColor="informative"
      />
      <Link to="/form/">
        <NavIcon icon="plus" onClick={isOpenedFilters} />
      </Link>
      <Link to="/">
        <NavIcon
          onClick={() =>
            setConfig((prev) => ({
              ...prev,
              refreshKey: prev.refreshKey + 1,
            }))
          }
          icon="filters"
          animationColor="negative"
          strikethrough
        />
      </Link>
      <Link to="/">
        <NavIcon
          onClick={() => {
            setConfig((prev) => ({ ...prev, startView: true }));
            dispatch({
              type: "RESET",
            });
          }}
          icon="trash"
          animationColor="negative"
          strikethrough
        />
      </Link>
    </section>
  );
}
