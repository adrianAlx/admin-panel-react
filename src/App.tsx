import { AppRouter } from './routes/AppRouter';
import { DarkModeProvider } from './context/darkModeContext';

export const App = () => {
  return (
    <DarkModeProvider>
      <AppRouter />
    </DarkModeProvider>
  );
};
