import { ConfigContext } from "../context/ConfigContext";
import { useContext } from "react";

export const useConfigContext = () => {
  const context = useContext(ConfigContext);
  if (!context)
    throw new Error("ConfigContext is not available within useConfigContext");

  return context;
};
