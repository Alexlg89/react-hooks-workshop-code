import React, { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const value = window.localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
};

const SomeContext = React.createContext();

export { SomeContext };
export { useLocalStorageState };
