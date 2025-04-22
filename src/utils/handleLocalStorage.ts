import { ERROR } from "../constants/constants";

export function handleLocalStorage(key: string) {
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
    let isSuccess;
    try {
      const item = window.localStorage.getItem(key);
      isSuccess = true;
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      isSuccess = false;
      console.log(error);
      alert(ERROR);
    }
    return isSuccess;
  };

  const removeLocalStorage = () => {
    let isSuccess;
    try {
      window.localStorage.removeItem(key);
      isSuccess = true;
    } catch (error) {
      isSuccess = false;
      console.log(error);
      alert(ERROR);
    }
    return isSuccess;
  };

  return { setLocalItem, getLocalItem, removeLocalStorage };
}
