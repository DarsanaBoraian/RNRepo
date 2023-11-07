import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import UseRef1 from './src/screens/UseRef/UseRef1';
import Navigator from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './store';
import {Provider} from 'react-redux';
import {AppStateProvider} from './components/AppStateProvider';
import AppStateReciever from './components/AppStateReceiver';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Navigator /> */}
        <AppStateProvider>
          <AppStateReciever />
        </AppStateProvider>
      </NavigationContainer>
    </Provider>
  );
}
