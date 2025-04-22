import { FORM_DROPDOWNS, FORM_DROPDOWN_LABELS } from "../../utils/handleForm";

import { BasicDropdown } from "../../components/ui/BasicDropdown";
import { Notifier } from "../../components/Notifier";
import { State } from "./Form";

type DetailsProps = {
  state: State;
};

export function Details({ state }: DetailsProps) {
  return (
    <section className="rounded-2xl bg-basic-100 p-5 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-4 md:p-10">
      {FORM_DROPDOWNS.map(({ id, values }, index) => (
        <div key={id}>
          <h3 className="mb-3 text-center text-lg md:text-xl">
            {FORM_DROPDOWN_LABELS[index].title}
          </h3>
          <p className="mb-4 text-center text-base font-light">
            {FORM_DROPDOWN_LABELS[index].subtitle}
          </p>
          <BasicDropdown
            name={id}
            values={values}
            defaultValue={state[id] ?? ""}
          />
          <Notifier
            label={FORM_DROPDOWN_LABELS[index].notice}
            className="mb-5 mt-4 md:mb-6"
          />
        </div>
      ))}
    </section>
  );
}
