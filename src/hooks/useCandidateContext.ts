import { CandidateContext } from "../context/CandidateContext";
import { useContext } from "react";

export const useCandidateContext = () => {
  const context = useContext(CandidateContext);
  if (!context)
    throw new Error(
      "CandidateContext is not available within useCandidateContext",
    );

  return context;
};
