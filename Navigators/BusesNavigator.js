import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Buses from '../Screens/Buses/Buses';

const Stack = createStackNavigator();

function BusesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Buses"
        component={Buses}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function BusesNavigator() {
  return <BusesStack />;
}
