import { createContext, useReducer } from 'react';

import { DarkModeReducer } from './darkModelReducer';

interface DarkModeContextProps {
  darkMode: number;
  setDarkMode: () => void;
  setLightMode: () => void;
  toggleDarkMode: () => void;
}

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

const INIT_STATE = {
  darkMode: Number(localStorage.getItem('darkMode')) || 0,
};

export const DarkModeContext = createContext<DarkModeContextProps>(
  {} as DarkModeContextProps
);

export const DarkModeProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INIT_STATE);

  const setDarkModeLS = (state: string) =>
    localStorage.setItem('darkMode', state);

  const setDarkMode = () => {
    dispatch({ type: 'DARK' });
    return setDarkModeLS('1');
  };
  const setLightMode = () => {
    dispatch({ type: 'LIGHT' });
    return setDarkModeLS('0');
  };
  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE' });
    return localStorage.setItem('darkMode', `${+!state.darkMode}`);
  };

  return (
    <DarkModeContext.Provider
      value={{
        darkMode: state.darkMode,
        setDarkMode,
        setLightMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
