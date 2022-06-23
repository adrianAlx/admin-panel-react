import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';

export const useDarkMode = () => useContext(DarkModeContext);
