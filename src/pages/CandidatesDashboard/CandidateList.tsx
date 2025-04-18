type CandidateListProps = {
  children: React.ReactNode;
};

export function CandidateList({ children }: CandidateListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(20.63rem,1fr))] gap-4 pb-24 md:pb-5">
      {children}
    </div>
  );
}
