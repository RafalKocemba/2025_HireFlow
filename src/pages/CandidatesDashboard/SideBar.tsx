import { BasicButton } from "../../components/ui/BasicButton";
import { Container } from "../../components/Container";
import { FilterPanel } from "./FilterPanel";
import { Link } from "react-router";
import { NavIcon } from "../../components/NavIcon";
import { SortPanel } from "./SortPanel";
import { useCandidateContext } from "../../hooks/useCandidateContext";
import { useConfigContext } from "../../hooks/useConfigContext";

type SideBarProps = {
  className?: string;
};

export function SideBar({ className }: SideBarProps) {
  const { dispatch } = useCandidateContext();
  const { setConfig } = useConfigContext();

  return (
    <aside
      className={`fixed bottom-8 left-0 right-0 z-10 flex min-h-[32rem] cursor-pointer flex-col gap-10 rounded-2xl bg-basic-100 px-5 py-10 shadow-tile transition-all duration-500 md:static md:overflow-hidden md:pb-24 ${className}`}
    >
      <Link to="/form/" className="hidden md:block">
        <BasicButton
          variant="primary"
          className="w-full"
          icon="plus-small"
          iconStyles="text-sm"
        >
          Add new
        </BasicButton>
      </Link>
      <Container className="grid grid-cols-2 content-start items-start gap-4 text-xs md:grid-cols-1 md:text-base">
        <SortPanel />
        <FilterPanel />
      </Container>
      <Link to="/" className="hidden md:flex md:justify-center md:gap-5">
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
    </aside>
  );
}
