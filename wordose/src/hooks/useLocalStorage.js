import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [itemValue, setItemValue] = useState(() => {
    const storageValue = window.localStorage.getItem(key);

    return storageValue ? JSON.parse(storageValue) : initialValue;
  });
  const setValue = (val) => {
    setItemValue(val);
    window.localStorage.setItem(key, JSON.stringify(val));
  };
  return [itemValue, setValue];
};
export default useLocalStorage;
