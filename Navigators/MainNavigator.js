import React, { useContext, useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { colors } from '../assets/global/globalStyles';


import { Icon } from '@rneui/base';
import CartIcon from '../Shared/CartIcon';
import AuthGlobal from '../Context/store/AuthGlobal';

// Stacks
import HomeNavigator from './HomeNavigator';
import UserNavigator from './UserNavigator';
import SubscriptionsNavigator from './SubscriptionsNavigator';
import UserNotifications from '../Screens/UserNotifications/UserNotifications';

const Tab = createBottomTabNavigator();
var userRoll = 'user';

const MainNavigator = () => {
  const context = useContext(AuthGlobal);
  // const [userRoll, setUserRoll] = useState('');

  // useEffect(() => {
  //   if (context.stateUser.user.userRoll !== undefined) {
  //     setUserRoll(context.stateUser.user.userRoll.toLowerCase());
  //   }
  //   return () => {
  //     setUserRoll('');
  //   };
  // }, [context.stateUser.user]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.buttons,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="font-awesome" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="MySubscriptions"
        component={SubscriptionsNavigator}
        options={{
          tabBarLabel: 'Subscriptions',
          tabBarIcon: ({ color, size }) => (
            <View style={{ back: color }}>
              <Icon
                name="subscriptions"
                type="MaterialIcons"
                color={color}
                size={size}
              />
            </View>
          ),
        }}
      />

      {/* {userRoll === 'admin' ? (
        <Tab.Screen
          name="Admin"
          // component={AdminTopTabNavigator}
          component={AdminMainNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="admin-panel-settings"
                type="material"
                color={color}
                size={size}
              />
            ),
            tabBarLabel: 'Admin Panel',
          }}
        />
      ) : null} */}

      {/* <Tab.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="shopping-bag"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      /> */}

      <Tab.Screen
        name="Notifications"
        component={UserNotifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="notifications"
              type="MaterialIcons"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
