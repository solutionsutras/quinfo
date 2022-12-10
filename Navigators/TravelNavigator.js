import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Travel from '../Screens/Travel/Travel';

const Stack = createStackNavigator();

function TravelStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Travel"
        component={Travel}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function TravelNavigator() {
  return <TravelStack />;
}
