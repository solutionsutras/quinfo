import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Doctors from '../Screens/Doctors/Doctors';

// Screens

const Stack = createStackNavigator();

function DoctorsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Doctors"
        component={Doctors}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function DoctorsNavigator() {
  return <DoctorsStack />;
}
