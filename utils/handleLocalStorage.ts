import { ERROR } from "../src/constants/constants";

export const handleLocalStorage = (key: string) => {
  const setLocalItem = (value: unknown) => {
    let isSuccess;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      isSuccess = true;
    } catch (error) {
      isSuccess = false;
      console.log(error);
      alert(ERROR);
    }
    return isSuccess;
  };

  const getLocalItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error);
      alert(ERROR);
    }
  };

  const removeLocalStorage = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
      alert(ERROR);
    }
  };

  return { setLocalItem, getLocalItem, removeLocalStorage };
};
