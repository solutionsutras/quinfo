import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthGlobal from '../Context/store/AuthGlobal';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
// Screens

const Stack = createStackNavigator();

function RootStack() {
const context = useContext(AuthGlobal);
  return (
    <Stack.Navigator>
      {context.stateUser.isAuthenticated ? (
        <Stack.Screen
          name="MainNavigator"
          component={MainNavigator}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
}

export default function RootNavigator() {
  return <RootStack />;
}
