import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Social from '../Screens/Social/Social';

// Screens
const Stack = createStackNavigator();

function SocialStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Social"
        component={Social}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function SocialNavigator() {
  return <SocialStack />;
}
