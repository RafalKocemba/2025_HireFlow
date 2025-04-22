import { CandidateActionType } from "../reducer/candidateReducer";
import { createContext } from "react";

type CandidateContextType = {
  state?: Record<string, unknown>;
  dispatch: React.Dispatch<CandidateActionType>;
};

export const CandidateContext = createContext<CandidateContextType | null>(
  null,
);
