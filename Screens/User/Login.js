import React, { useState, useEffect, useContext, } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { COLORS, SIZES } from '../../constants/theme'
import { Button } from 'native-base';
import Checkbox from 'expo-checkbox';

import FormContainer from '../../Shared/Forms/FormContainer';
// import Input from '../../Shared/Forms/Input';
import Error from '../../Shared/Error';
// import Toast from 'react-native-toast-message';

// Context
import AuthGlobal from '../../Context/store/AuthGlobal';
import { loginUser } from '../../Context/actions/Auth.actions';
import EasyButton from '../../Shared/StyledComponents/EasyButton';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../assets/global/globalStyles';

// var { height } = Dimensions.get('window');
// const image = require('../../assets/login-bg.png');
// var frm = '';

const Login = (props) => {
  const [from, setFrom] = useState(props.route.params.fromNav);
  const context = useContext(AuthGlobal);
  const [userName, setUserName] = useState('q1@gmail.com');
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState('123');
  const [error, setError] = useState();
  const [agree, setAgree] = useState(false)

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      props.navigation.navigate(
        'MainNavigator',
        { route: 'Home' },
        { screen: 'Homescreen' }
      );
    }

    return () => { };
  }, [context.stateUser.isAuthenticated]);

  const handleLogin = () => {
    const user = {
      userId: userName,
      password: password,
    };
    if (userName === '' || password === '') {
      setError('Please fill your credentials');
    } else {
      loginUser(user, context.dispatch);
    }
  };
  return (
    <FormContainer style={styles.mainContainer}>
      {/* <Text style={styles.mainHeader}>Login Form</Text> */}
      <Text style={styles.description}>
        You can reach us any time 
      </Text>
      <View style={styles.viewInputContainer}>
        <Text style={styles.labels}>
          Enter your Name
        </Text>
        <TextInput style={styles.inputStyle}
          placeholder={'Email ID/Phone No'}
          name={'userName'}
          id={'userName'}
          value={userName}
          onChangeText={(text) => setUserName(text.toLowerCase())} />
      </View>

      <View style={styles.viewInputContainer}>
        <Text style={styles.labels}>
          Enter your Password
        </Text>
        <TextInput style={styles.inputStyle}
          placeholder={'Password'}
          name={'password'}
          id={'password'}
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? COLORS.headerTheme4 : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      <TouchableOpacity style={[styles.buttonStyle,
      { backgroundColor: agree ? COLORS.headerTheme4 : 'gray', }]}
        disabled={!agree}
        onPress={() => handleLogin()}>
        <Text style={styles.loginText}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text style={styles.betweenText}>------------- OR -------------</Text>
      <TouchableOpacity style={[styles.buttonStyle,
      { backgroundColor: COLORS.headerTheme2 }]}
        // disabled={!agree}
        onPress={() => {
          props.navigation.navigate('OtpLogin');
        }}>
        <Text style={styles.loginText}>
          LOGIN USING OTP
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('ResetPassword');
        }}
      >
        <Text
          style={[
            styles.betweenText,
            { color: COLORS.headerTheme4, textDecorationLine: 'underline' },
          ]}
        >
          Forgot password?
        </Text>
      </TouchableOpacity>
      <Text style={[styles.betweenText, { marginTop: 80 }]}>
        Don't have an account yet?{' '}
      </Text>
      <TouchableOpacity style={[styles.buttonStyle,
      { backgroundColor: COLORS.headerTheme1 }]}
        // disabled={!agree}
        onPress={() => props.navigation.navigate('Register')}
      >
        <Text style={styles.loginText}>
          REGISTER
        </Text>
      </TouchableOpacity>
    </FormContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  // mainHeader: {
  //   fontSize: 25,
  //   color: '#344055',
  //   fontWeight: 'bold',
  //   paddingTop: 20,
  //   paddingBottom: 15,
  //   // fontFamily: 'bold',
  // },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    // fontFamily: 'regular',
  },
  viewInputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    // fontFamily: 'regular'
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    fontSize: 18,
  },
  wrapper: {
    paddingTop: 30,
    flexDirection: 'row',
  },
  wrapperText: {
    paddingLeft: 10,
    // fontFamily: 'regular'
  },
  buttonStyle: {
    alignItems: 'center',
    marginTop: 30,
    height: 40,
    borderRadius: 5,
    width:200,
  },
  loginText: {
    color: 'white',
    paddingTop: 10,
    fontSize: 15,
    // fontFamily: 'regular'
  },
  betweenText: {
    marginTop: 25,
    marginBottom: 0,
    alignSelf: 'center',
    color: 'gray'
  },
});


// style={[{ height: height }