import { Candidate } from "./handleSorting";

export const FILTER_OPTIONS = [
  {
    id: "rating",
    label: "Rating",
    values: [
      { value: "rating_", label: "All ratings" },
      { value: "rating_1", label: "Rating: 1" },
      { value: "rating_1+", label: "Rating: 1+" },
      { value: "rating_2", label: "Rating: 2" },
      { value: "rating_2+", label: "Rating: 2+" },
      { value: "rating_3", label: "Rating: 3" },
      { value: "rating_3+", label: "Rating: 3+" },
      { value: "rating_4", label: "Rating: 4" },
      { value: "rating_4+", label: "Rating: 4+" },
      { value: "rating_5", label: "Rating: 5" },
    ],
  },
  {
    id: "step",
    label: "Recruitment stage",
    values: [
      { value: "step_", label: "All stages" },
      { value: "step_1", label: "Stage: 1" },
      { value: "step_1+", label: "Stage: 1+" },
      { value: "step_2", label: "Stage: 2" },
      { value: "step_2+", label: "Stage: 2+" },
      { value: "step_3", label: "Stage: 3" },
    ],
  },
  {
    id: "like",
    label: "Likes",
    values: [
      { value: "like_", label: "All" },
      { value: "like_2", label: "Like" },
      { value: "like_1", label: "Dislike" },
    ],
  },
];

export const FILTER_KEYS = ["rating", "step", "like"];

type FilterOption = {
  id: string;
  label: string;
  values: {
    value: string;
    label: string;
  }[];
  defaultValue?: string;
};

export function getInitialFilterOptions(
  searchParams: URLSearchParams,
): FilterOption[] {
  return FILTER_OPTIONS.map((filterGroup) => {
    const paramValue = searchParams.get(filterGroup.id);

    if (paramValue) {
      return {
        ...filterGroup,
        defaultValue: `${filterGroup.id}_${paramValue}`,
      };
    }

    return filterGroup;
  });
}

export function filterCandidates(
  candidateList: Candidate[],
  filterId: string,
  filterValue: string,
): Candidate[] {
  if (!filterValue.endsWith("+")) {
    return candidateList.filter(
      (candidate) => candidate[filterId] === `${filterId}_${filterValue}`,
    );
  }

  const minValue = parseInt(filterValue.slice(0, -1), 10);

  return candidateList.filter((candidate) => {
    const rawValue = candidate[filterId];
    if (!rawValue || typeof rawValue !== "string") return false;

    const [, valueStr] = rawValue.split("_");
    if (!valueStr) return false;
    const value = parseInt(valueStr, 10);

    return Number.isFinite(value) && value >= minValue;
  });
}
