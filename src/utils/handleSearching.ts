export type SearchCandidate = {
  name?: string;
  surname?: string;
  email?: string;
};

const SEARCHABLE_FIELDS: (keyof SearchCandidate)[] = [
  "name",
  "surname",
  "email",
];

function hasMatchingField(candidate: SearchCandidate, query: string) {
  return SEARCHABLE_FIELDS.some((field) => {
    const fieldValue = candidate[field];

    if (typeof fieldValue !== "string") return false;

    return fieldValue.toLowerCase().includes(query);
  });
}

export function searchCandidates(
  candidates: SearchCandidate[],
  searchQuery: string,
) {
  if (!candidates?.length || !searchQuery) return candidates;

  const normalizedQuery = searchQuery.toLowerCase().trim();

  return candidates.filter((candidate) =>
    hasMatchingField(candidate, normalizedQuery),
  );
}
