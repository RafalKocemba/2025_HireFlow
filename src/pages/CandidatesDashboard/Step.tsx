type StepProps = {
  step: string;
};

export function Step({ step }: StepProps) {
  const [, stepNumber] = step.split("_");

  return (
    <div className="mt-3 flex gap-1">
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${Number(stepNumber) <= i || !Number(stepNumber) ? "bg-green-400" : "bg-green-900"}`}
        ></span>
      ))}
    </div>
  );
}
