import { CandidateActionType } from "../reducer/candidateReducer";
import { createContext } from "react";

type CandidateContextType = {
  state?: object;
  dispatch: React.ActionDispatch<[CandidateActionType]>;
};
export const CandidateContext = createContext<CandidateContextType | null>(
  null,
);
