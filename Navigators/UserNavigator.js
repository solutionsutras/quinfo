import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from '../Screens/User/UserProfile';
import { colors } from '../assets/global/globalStyles';
import { StyleSheet, Button } from 'react-native';
import EditProfile from '../Screens/User/EditProfile';
import ResetPassword from '../Screens/User/ResetPassword';
import ChangePhoneNo from '../Screens/User/ChangePhoneNo';
import UserTransactions from '../Screens/User/Transactions/UserTransactions';
import UserTransactionDetails from '../Screens/User/Transactions/UserTransactionDetails';
import UserWishList from '../Screens/User/WishList/UserWishList';

const Stack = createStackNavigator();

function UserStack() {
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
        name="UserProfile"
        component={UserProfile}
        initialParams={{ fromNav: '' }}
        options={{
          title: 'My profile',
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        initialParams={{ fromNav: '' }}
        options={{
          title: 'Edit profile',
        }}
      />
      <Stack.Screen
        name="ChangePhoneNo"
        component={ChangePhoneNo}
        options={{
          title: 'Change phone no',
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          title: 'Reset password',
        }}
      />

      <Stack.Screen
        name="UserWishList"
        component={UserWishList}
        options={{
          title: 'My wishlist',
        }}
      />
    </Stack.Navigator>
  );
}

export default function UserNavigator() {
  return <UserStack />;
}

const styles = StyleSheet.create({
  headerText: {
    position: 'absolute',
    top: -20,
  },
});
