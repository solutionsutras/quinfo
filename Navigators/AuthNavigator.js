import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/User/Login';
import Register from '../Screens/User/Register';
import { colors } from '../assets/global/globalStyles';
import { StyleSheet, Button } from 'react-native';
import OtpLogin from '../Screens/User/OtpLogin';
import ResetPassword from '../Screens/User/ResetPassword';

const Stack = createStackNavigator();

function AuthStack() {
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
        // headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        initialParams={{ fromNav: 'UserProfile' }}
        options={{
          title: 'Please login/register to continue',
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        initialParams={{ fromNav: '' }}
        options={{
          title: 'New User Registration',
        }}
      />
      <Stack.Screen
        name="OtpLogin"
        component={OtpLogin}
        initialParams={{ fromNav: '' }}
        options={{
          title: 'Login Using OTP',
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          title: 'Reset Password',
        }}
      />
    </Stack.Navigator>
  );
}

export default function AuthNavigator() {
  return <AuthStack />;
}

const styles = StyleSheet.create({
  headerText: {
    position: 'absolute',
    top: -30,
  },
});
