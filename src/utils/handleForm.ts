import { Icons } from "../components/ui/BasicIcon";
import { LOCAL_STORAGE_CANDIDATES_KEY } from "../constants/constants";
import { handleLocalStorage } from "./handleLocalStorage";

const { getLocalItem } = handleLocalStorage(LOCAL_STORAGE_CANDIDATES_KEY);

export function initFormValues(paramId: number) {
  if (!paramId) return {};

  const candidateList = getLocalItem();
  if (!candidateList) return {};

  const candidateData = candidateList[paramId];
  return candidateData || {};
}

type FormTextareaProps = {
  id: string;
  copy: string;
  limit: number;
};
type FormFieldsProps = FormTextareaProps & {
  variant: "primary" | "secondary" | "icon";
  icon?: Icons;
};

// The absence of a specified input type is intentional to avoid limiting the recruiter's possibilities.
export const FORM_FIELDS: FormFieldsProps[] = [
  {
    id: "name",
    copy: "Full name",
    limit: 60,
    variant: "primary",
  },
  {
    id: "position",
    copy: "Position",
    limit: 30,
    variant: "secondary",
  },
  {
    id: "city",
    copy: "Location",
    limit: 80,
    variant: "icon",
    icon: "location",
  },
  {
    id: "phone",
    copy: "Phone number",
    limit: 80,
    variant: "icon",
    icon: "phone",
  },
  {
    id: "email",
    copy: "Email address",
    limit: 80,
    variant: "icon",
    icon: "email",
  },
  {
    id: "repo",
    copy: "Portfolio link",
    limit: 100,
    variant: "icon",
    icon: "portfolio",
  },
];
export const FORM_TEXTAREA: FormTextareaProps[] = [
  { id: "notes", copy: "Your notes...", limit: 480 },
];

export const FORM_DROPDOWNS = [
  {
    id: "language",
    values: [
      { value: "language_none", label: "None" },
      { value: "language_a1", label: "A1" },
      { value: "language_a2", label: "A2" },
      { value: "language_b1", label: "B1" },
      { value: "language_b2", label: "B2" },
      { value: "language_c1", label: "C1" },
      { value: "language_c2", label: "C2" },
      { value: "language_native", label: "Native" },
    ],
  },
  {
    id: "rating",
    values: [
      { value: "rating_none", label: "None" },
      { value: "rating_1", label: "1" },
      { value: "rating_2", label: "2" },
      { value: "rating_3", label: "3" },
      { value: "rating_4", label: "4" },
      { value: "rating_5", label: "5" },
    ],
  },
  {
    id: "step",
    values: [
      { value: "step_none", label: "None" },
      { value: "step_1", label: "1" },
      { value: "step_2", label: "2" },
      { value: "step_3", label: "3" },
    ],
  },
];
export const FORM_DROPDOWN_LABELS = [
  {
    title: "English proficiency",
    subtitle: "Select level",
    notice: "Available levels from A1 to Native",
  },
  {
    title: "Recruitment rating",
    subtitle: "Provide recruitment rating",
    notice: "Available ratings from 1 to 5",
  },
  {
    title: "Recruitment stage",
    subtitle: "Specify the current recruitment stage",
    notice: "Available stages from 1 to 3",
  },
];

export const TECHNOLOGIES = {
  javascript: false,
  typescript: false,
  react: false,
  vue: false,
  angular: false,
};
