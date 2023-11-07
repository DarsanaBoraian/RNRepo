import {createContext, useContext, useState, useEffect} from 'react';
import {AppState as AppStateRN, Platform} from 'react-native';

const AppStateContext = createContext();

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};

export const AppStateProvider = ({children}) => {
  const [appState, setAppState] = useState(AppStateRN.currentState);

  useEffect(() => {
    function handleAppStateChange(nextAppState) {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        if (Platform.OS === 'ios') {
          // Handle specific behavior on iOS when the app becomes active
        }
      }

      if (nextAppState === 'active') {
        console.log('This is the active state of the app');
        // Perform actions when the app is in the active state
      }

      setAppState(nextAppState);
    }

    const appStateInst = AppStateRN.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      appStateInst.remove();
    };
  }, [appState]);

  return (
    <AppStateContext.Provider value={appState}>
      {children}
    </AppStateContext.Provider>
  );
};
