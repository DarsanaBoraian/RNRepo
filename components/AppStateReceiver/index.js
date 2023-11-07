import React from 'react';
import {useAppState} from '../AppStateProvider';
import {SafeAreaView, Text} from 'react-native';

function AppStateReciever() {
  const appState = useAppState();

  return (
    <SafeAreaView>
      <Text>Current App State: {appState}</Text>
    </SafeAreaView>
  );
}

export default AppStateReciever;
