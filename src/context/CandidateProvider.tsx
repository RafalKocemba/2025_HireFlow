import { CandidateContext } from "./CandidateContext";
import { LOCAL_STORAGE_CANDIDATES_KEY } from "../constants/constants";
import { candidateReducer } from "../reducer/candidateReducer";
import { useReducer } from "react";

type CandidateProviderProps = {
  children: React.ReactNode;
};

const initialValue = localStorage[LOCAL_STORAGE_CANDIDATES_KEY]
  ? JSON.parse(localStorage[LOCAL_STORAGE_CANDIDATES_KEY])
  : {};

export const CandidateProvider = ({ children }: CandidateProviderProps) => {
  const [state, dispatch] = useReducer(candidateReducer, initialValue);

  return (
    <CandidateContext value={{ state, dispatch }}>{children}</CandidateContext>
  );
};
