import { BasicTextarea } from "../../components/ui/BasicTextarea";
import { FORM_TEXTAREA } from "../../utils/handleForm";
import { State } from "./Form";

type OwnNotesProps = {
  state: State;
};

export function OwnNotes({ state }: OwnNotesProps) {
  return (
    <section className="rounded-2xl bg-basic-100 p-2 md:p-4">
      {FORM_TEXTAREA.map(({ id, copy, limit }) => (
        <BasicTextarea
          key={id}
          name={id}
          defaultValue={state[id] ?? ""}
          placeholder={copy}
          limit={limit}
          inputStyles="placeholder:text-basic-600 min-h-[19.06rem] md:min-h-44 rounded-2xl bg-basic-100 p-3 md:p-4 text-sm font-light transition-colors duration-100 focus:bg-basic-300 focus:placeholder:text-basic-300 md:text-base md:hover:bg-basic-300"
        />
      ))}
    </section>
  );
}
