//yarn add @react-navigation/native
//yarn add react-native-screens react-native-safe-area-context
//yarn add @react-navigation/native-stack
import {useEffect, useState} from 'react';
import {} from 'react-native';
import {PersistanceHelper} from '../helpers';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventRegister} from 'react-native-event-listeners';
import {TestReduxScreen, ListApiScreen} from '../src/screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="testApiScreen"
          component={ListApiScreen}
          options={{title: 'Test Api Component'}}
        />

        <Stack.Screen
          name="testReduxScreen"
          component={TestReduxScreen}
          options={{title: 'Test Redux Component'}}
        />
      </Stack.Group>
    );
  };

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
        //   name="login"
        //   component={Login}
        //   options={{title: 'Login'}}
        />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {/* {isUserLoggedin ? getMainStack() : getAuthStack()} */}
      {getMainStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
