import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AgentsHome from '../../Screens/Agents/AgentsHome';



// const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function AgentsTabs() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AgentsHome"
        component={AgentsHome}
        options={{ tabBarLabel: 'Agents Home' }}
      />
    </Stack.Navigator>
  );
}

export default function AgentsMainNavigator() {
  return <AgentsTabs />;
}
