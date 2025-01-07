import { CandidateContext } from "./CandidateContext";
import { STORAGE_NAME } from "../constants/constants";
import { candidateReducer } from "../reducer/candidateReducer";
import { useReducer } from "react";

type CandidateProviderProps = {
  children: React.ReactNode;
};

const initialValue = localStorage[STORAGE_NAME]
  ? JSON.parse(localStorage[STORAGE_NAME])
  : {};

export const CandidateProvider = ({ children }: CandidateProviderProps) => {
  const [state, dispatch] = useReducer(candidateReducer, initialValue);

  return (
    <CandidateContext value={{ state, dispatch }}>{children}</CandidateContext>
  );
};
