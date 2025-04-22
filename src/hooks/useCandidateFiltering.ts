import { FILTER_KEYS, filterCandidates } from "../utils/handleFiltering";

import { searchCandidates } from "../utils/handleSearching";
import { sortCandidates } from "../utils/handleSorting";
import { useSearchParams } from "react-router";

export function useCandidateFiltering(candidates: object = {}) {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const sort = searchParams.get("sort");

  let candidateList = Object.values(candidates);

  if (searchQuery) {
    candidateList = searchCandidates(candidateList, searchQuery);
  }

  if (sort) {
    candidateList = sortCandidates(candidateList, sort);
  }

  FILTER_KEYS.forEach((key) => {
    const value = searchParams.get(key);

    if (value) {
      candidateList = filterCandidates(candidateList, key, value);
    }
  });

  return candidateList;
}
