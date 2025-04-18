import { createContext } from "react";

export type ConfigTypes = {
  startView: boolean;
  refreshKey: number;
};

export type ConfigContextType = {
  config: ConfigTypes;
  setConfig: React.Dispatch<React.SetStateAction<ConfigTypes>>;
};

export const ConfigContext = createContext<ConfigContextType | null>(null);
