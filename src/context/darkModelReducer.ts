export type DarkModeAction = {
  type: 'LIGHT' | 'DARK' | 'TOGGLE';
};

interface DarkModeState {
  darkMode: number;
}

export const DarkModeReducer = (
  state: DarkModeState,
  action: DarkModeAction
) => {
  switch (action.type) {
    case 'LIGHT':
      return {
        ...state,
        darkMode: 0,
      };

    case 'DARK':
      return {
        ...state,
        darkMode: 1,
      };

    case 'TOGGLE':
      return {
        ...state,
        darkMode: +!state.darkMode,
      };

    default:
      return state;
  }
};
