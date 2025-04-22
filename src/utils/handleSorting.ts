export type Candidate = {
  [key: string]: string | null;
};

export const SORT_OPTIONS = [
  { value: "id_desc", label: "Created (newest)" },
  { value: "id_asc", label: "Created (oldest)" },
  { value: "name_asc", label: "Name (A-Z)" },
  { value: "name_desc", label: "Name (Z-A)" },
];

export function sortCandidates(candidateList: Candidate[], sort: string) {
  if (!candidateList?.length || !sort) return candidateList;

  const [field, order] = sort.split("_");
  candidateList.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    if (aValue == null) return 1;
    if (bValue == null) return -1;

    const comparison = String(aValue).localeCompare(String(bValue));

    return order === "asc" ? comparison : -comparison;
  });
  return candidateList;
}
