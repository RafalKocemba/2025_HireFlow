import {
  FORM_DROPDOWNS,
  FORM_FIELDS,
  FORM_TEXTAREA,
  TECHNOLOGIES,
  initFormValues,
} from "../../utils/handleForm";
import { Technologies, TechnologiesTypes } from "./Technologies";
import { useActionState, useState } from "react";

import { BasicButton } from "../../components/ui/BasicButton";
import { BusinessCard } from "./BusinessCard";
import { Details } from "./Details";
import { FormPanel } from "./FormPanel";
import { OwnNotes } from "./OwnNotes";
import { getRandomContactColor } from "../../utils/helpers";
import { useCandidateContext } from "../../hooks/useCandidateContext";
import { useConfigContext } from "../../hooks/useConfigContext";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

export type State = {
  [key: string]: string | null;
};

export function Form() {
  const { dispatch } = useCandidateContext();
  const { config, setConfig } = useConfigContext();
  const { id: paramId } = useParams();
  const navigate = useNavigate();

  const initialState = initFormValues(Number(paramId));
  const [technologies, setTechnologies] = useState(
    initialState.technologies || { ...TECHNOLOGIES },
  );

  const [state, formAction] = useActionState(handleSubmit, initialState);

  const handleTechChange = (key: string) => {
    setTechnologies((prev: TechnologiesTypes) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  async function handleSubmit(_: State, formData: FormData): Promise<State> {
    const newState: State = {};

    const fields = [...FORM_FIELDS, ...FORM_DROPDOWNS, ...FORM_TEXTAREA];

    fields.forEach(({ id }) => {
      const value = formData.get(id);
      newState[id] = value ? String(value) : null;
    });

    newState.technologies = technologies;
    newState.color = state.color ? state.color : getRandomContactColor();

    if (paramId) {
      dispatch({
        type: "EDIT",
        payload: { ...newState, id: Number(paramId) },
      });
    } else {
      dispatch({
        type: "ADD",
        payload: newState,
      });
    }

    if (config.startView) {
      setConfig((prev) => ({ ...prev, startView: false }));
    }

    navigate(-1);
    return newState;
  }
  return (
    <main className="centered-container mb-12 text-basic-900">
      <FormPanel />
      <form action={formAction} className="grid gap-4 md:grid-cols-[6fr,3fr]">
        <BusinessCard state={state} />

        <Technologies
          technologies={technologies}
          onTechChange={handleTechChange}
        />
        <OwnNotes state={state} />
        <Details state={state} />

        <BasicButton variant="primary" className="mt-5 min-w-64 md:mx-auto">
          Save profile
        </BasicButton>
      </form>
    </main>
  );
}
