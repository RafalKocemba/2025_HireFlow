import { ConfigContext, ConfigTypes } from "./ConfigContext";

import { LOCAL_STORAGE_CONFIG_KEY } from "../constants/constants";
import { handleLocalStorage } from "../utils/handleLocalStorage";
import { useState } from "react";

type ConfigProviderProps = {
  children: React.ReactNode;
};

const { getLocalItem } = handleLocalStorage(LOCAL_STORAGE_CONFIG_KEY);

const initialValue = (): ConfigTypes => {
  const configStorageData = getLocalItem();
  const initConfig: ConfigTypes = { startView: true, refreshKey: 0 };

  if (configStorageData) return configStorageData;
  return initConfig;
};

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [config, setConfig] = useState<ConfigTypes>(initialValue);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};
