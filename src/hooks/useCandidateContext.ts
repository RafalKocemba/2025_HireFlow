import { CandidateContext } from "../context/CandidateContext";
import { useContext } from "react";

export const useCandidateContext = () => {
  const context = useContext(CandidateContext);
  if (!context) throw new Error("No context in useCandidateContext");

  return context;
};
