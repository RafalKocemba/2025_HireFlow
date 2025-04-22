import { BasicIcon } from "../../components/ui/BasicIcon";

type RatingProps = {
  rating: string;
};

export function Rating({ rating }: RatingProps) {
  const [, score] = rating.split("_");

  return (
    <div className="mt-3 flex gap-[.06rem]">
      {Array.from({ length: 5 }).map((_, i) => (
        <BasicIcon
          key={i}
          icon="star"
          iconStyles={`text-lg ${i + 1 > Number(score) || isNaN(Number(score)) ? "text-basic-700" : "text-additional-400"}`}
        />
      ))}
    </div>
  );
}
