import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../assets/global/globalStyles';
import { StyleSheet, Button } from 'react-native';
import MySubscriptions from '../Screens/Subscriptions/MySubscriptions';

const Stack = createStackNavigator();

function SubscriptionsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.buttons,
          height: 40,
        },
        headerLeft: false,
        headerTintColor: 'white',
        headerTitleStyle: styles.headerText,
      }}
    >
      <Stack.Screen
        name="UserSubscriptions"
        component={MySubscriptions}
        initialParams={{ fromNav: '' }}
        options={{
          title: 'Subscriptions',
        }}
      />
    </Stack.Navigator>
  );
}

export default function SubscriptionsNavigator() {
  return <SubscriptionsStack />;
}

const styles = StyleSheet.create({
  headerText: {
    position: 'absolute',
    top: -20,
  },
});
