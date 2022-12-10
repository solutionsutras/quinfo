import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Govt from '../Screens/Govt/Govt';

// Screens

const Stack = createStackNavigator();

function GovtStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Govt"
        component={Govt}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function GovtNavigator() {
  return <GovtStack />;
}
