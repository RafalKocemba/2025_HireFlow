import { Avatar } from "../../components/Avatar";
import { AvatarRepresentation } from "./AvatarRepresentation";
import { BasicInput } from "../../components/ui/BasicInput";
import { Container } from "../../components/Container";
import { FORM_FIELDS } from "../../utils/handleForm";
import { State } from "./Form";

type BusinessCardProps = {
  state: State;
};

export function BusinessCard({ state }: BusinessCardProps) {
  return (
    <section className="gap-10 rounded-2xl bg-basic-100 p-5 md:grid-cols-[minmax(auto,10rem)_1fr] md:p-10 lg:grid">
      <AvatarRepresentation color={state.color}>
        <Avatar color={state.color} name={state.name} />
      </AvatarRepresentation>
      <Container className="flex flex-col">
        {FORM_FIELDS.map(({ id, copy, limit, variant, icon }) => (
          <BasicInput
            key={id}
            name={id}
            defaultValue={state[id] ?? ""}
            placeholder={copy}
            limit={limit}
            variant={variant}
            icon={icon}
            iconStyles="text-additional-300 md:text-xl"
            className="md:gap-3"
          />
        ))}
      </Container>
    </section>
  );
}
