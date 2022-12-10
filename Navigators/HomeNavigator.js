import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from '../Screens/Home/Home';
import BusesNavigator from './BusesNavigator';
import DoctorsNavigator from './DoctorsNavigator';
import TravelNavigator from './TravelNavigator';
import SocialNavigator from './SocialNavigator';
import CultureNavigator from './CultureNavigator';
import GovtNavigator from './GovtNavigator';
import PageNotFound from '../Screens/PageNotFound';

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

      <Stack.Screen
        name="BusesInfo"
        component={BusesNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="DoctorsInfo"
        component={DoctorsNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TravelInfo"
        component={TravelNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SocialInfo"
        component={SocialNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CulturalInfo"
        component={CultureNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="GovtNotices"
        component={GovtNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PageNotFound"
        component={PageNotFound}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <HomeStack />;
}
