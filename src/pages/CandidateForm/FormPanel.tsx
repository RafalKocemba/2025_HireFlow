import { Logo } from "../../components/Logo";
import { NavIcon } from "../../components/NavIcon";
import { useCandidateContext } from "../../hooks/useCandidateContext";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

export function FormPanel() {
  const { dispatch } = useCandidateContext();
  const { id: paramId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackHome = () =>
    location.key === "default" ? navigate("/") : navigate(-1);

  const handleDelete = () => {
    dispatch({
      type: "DELETE",
      payload: {
        id: Number(paramId),
      },
    });
    handleBackHome();
  };

  return (
    <header className="relative my-10 flex justify-between gap-6">
      <NavIcon
        icon="arrow-left"
        onClick={handleBackHome}
        animationColor="informative"
      />
      <Logo
        className={
          paramId
            ? ""
            : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        }
      />
      {paramId && (
        <NavIcon
          icon="trash"
          onClick={handleDelete}
          animationColor="negative"
        />
      )}
    </header>
  );
}
