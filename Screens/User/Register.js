import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Button } from 'native-base';
import { assets, COLORS, SIZES } from '../../constants';
import Checkbox from 'expo-checkbox';

import axios from 'axios';
import baseUrl from '../../assets/common/baseUrl';

import FormContainer from '../../Shared/Forms/FormContainer';
import Input from '../../Shared/Forms/Input';
import Error from '../../Shared/Error';
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EasyButton from '../../Shared/StyledComponents/EasyButton';
import { colors } from '../../assets/global/globalStyles';
const { width, height } = Dimensions.get('window');

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Odisha');
  const [country, setCountry] = useState('India');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [agree, setAgree] = useState(false);

  const register = () => {
    if (name === '' || email === '' || phone === '' || password === '') {
      setError('Please fill all the details correctly');
    }

    let user = {
      name: name,
      email: email,
      username: email,
      phone: phone,
      password: password,
      //   userRoll: 'user',
      address: address,
      city: city,
      pin,
      pin,
      state: state,
      country: country,
    };

    axios
      .post(`${baseUrl}users/register`, user)
      .then((res) => {
        if (res.status == 200) {
          Toast.show({
            topOffset: 60,
            type: 'success',
            text1: 'Registration Successful',
            text2: 'Please login into your account',
          });
          setTimeout(() => {
            props.navigation.navigate('Login');
          }, 500);
        }
      })
      .catch((error) => {
        Toast.show({
          topOffset: 60,
          type: 'error',
          text1: 'Something went wrong',
          text2: 'Please try again',
        });
      });
  };
  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <View>
        <FormContainer title={'Register'} style={styles.inputFields}>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Full Name'}
            name={'name'}
            id={'name'}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={'Phone No'}
            name={'phone'}
            id={'phone'}
            value={phone}
            keyboardType={'numeric'}
            onChangeText={(text) => setPhone(text)}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={'Email ID'}
            name={'email'}
            id={'email'}
            value={email}
            onChangeText={(text) => setEmail(text.toLowerCase())}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={'Password'}
            name={'password'}
            id={'password'}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={'Address'}
            name={'address'}
            id={'address'}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <View style={styles.inLine}>
            <TextInput
              style={[styles.input45, styles.inputNormal]}
              placeholder={'City'}
              name={'city'}
              id={'city'}
              value={city}
              onChangeText={(text) => setCity(text)}
            />
            <TextInput
              style={[styles.input45, styles.inputNormal]}
              placeholder={'PIN'}
              name={'pin'}
              id={'pin'}
              value={pin}
              keyboardType={'numeric'}
              onChangeText={(text) => setPin(text)}
            />
          </View>
          <View
            style={[
              styles.inLine,
              { marginTop: 10, justifyContent: 'flex-start' },
            ]}
          >
            <Text style={styles.normal18}>State: </Text>
            <TextInput
              style={styles.bold18}
              placeholder={'State'}
              name={'state'}
              id={'state'}
              value={state}
              onChangeText={(text) => setState(text)}
            />
            <Text style={styles.normal18}>, Country: </Text>
            <TextInput
              style={styles.bold18}
              placeholder={'Country'}
              name={'country'}
              id={'country'}
              value={country}
              onChangeText={(text) => setCountry(text)}
            />
          </View>
          <View>{error ? <Error message={error} /> : null}</View>

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
          <View>
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                { backgroundColor: agree ? COLORS.headerTheme1 : 'gray' },
              ]}
              disabled={!agree}
              onPress={() => register()}
            >
              <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>

            <Text style={styles.betweenText}>Already have an account? </Text>

            <TouchableOpacity
              style={[
                styles.buttonStyle,
                { backgroundColor: COLORS.headerTheme4 },
              ]}
              // disabled={!agree}
              onPress={() => props.navigation.navigate('Login')}
            >
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </FormContainer>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  // buttonGroup: {
  //   marginTop: 40,
  //   width: '80%',
  //   alignItems: 'center',
  // },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 10,
    width: width * 0.9,
  },
  betweenText: {
    marginTop: 20,
    marginBottom: 5,
    alignSelf: 'center',
  },
  inLine: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input45: {
    width: '48%',
    height: 48,
    margin: 10,
    paddingLeft: 15,
  },
  inputNormal: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  inputProtected: {
    backgroundColor: 'transparent',
  },
  normal18: { fontSize: 18 },
  bold18: { fontWeight: 'bold', fontSize: 18 },
  buttonStyle: {
    alignItems: 'center',
    marginTop: 10,
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
  wrapper: {
    paddingTop: 30,
    flexDirection: 'row',
  },
  wrapperText: {
    paddingLeft: 10,
    // fontFamily: 'regular'
  },
});
