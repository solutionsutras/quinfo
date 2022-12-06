import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from '../Screens/Home/Home';


const Stack = createStackNavigator();

function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Homescreen"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
}

export default function HomeNavigator(){
    return <HomeStack/>
}