import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Culture from '../Screens/Culture/Culture';

const Stack = createStackNavigator();

function CultureStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Culture"
        component={Culture}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function CultureNavigator() {
  return <CultureStack />;
}
