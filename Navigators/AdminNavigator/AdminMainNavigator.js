import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AdminHome from '../../Screens/Admin/AdminHome';

// const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function AdminTabs() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AdminHome"
        component={AdminHome}
        options={{ tabBarLabel: 'Admin Home' }}
      />

    </Stack.Navigator>
  );
}

export default function AdminMainNavigator() {
  return <AdminTabs />;
}
