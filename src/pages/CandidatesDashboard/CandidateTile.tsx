import { Avatar } from "../../components/Avatar";
import { Container } from "../../components/Container";
import { Likes } from "./Likes";
import { Link } from "react-router";
import { Rating } from "./Rating";
import { Step } from "./Step";
import { TechRepresentation } from "./TechRepresentation";
import { TechnologiesTypes } from "../CandidateForm/Technologies";

type CandidateTileProps = {
  candidateData: {
    id: number;
    name: string;
    technologies: TechnologiesTypes;
    color: string;
    position: string;
    rating: string;
    step: string;
  };
};

export function CandidateTile({ candidateData }: CandidateTileProps) {
  const { id, name, technologies, color, position, rating, step } =
    candidateData;

  return (
    <Link to={`/form/${id}`} className="relative">
      <div className="flex flex-col flex-wrap break-all rounded-2xl bg-basic-100 p-5 shadow-tile transition-shadow hover:shadow-none">
        <Container className="flex items-center gap-3">
          <Avatar color={color} name={name} variant="small" />
          <Container>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-base font-extralight">{position}</p>
          </Container>
        </Container>
        <Container className="flex items-center justify-between">
          <Rating rating={rating} />
          <Step step={step} />
        </Container>
        <Container className="mt-4 flex justify-between">
          <TechRepresentation technologies={technologies} />
          <Likes candidateData={candidateData} />
        </Container>
      </div>
    </Link>
  );
}
