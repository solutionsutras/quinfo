import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Button } from 'native-base';
import { COLORS, SIZES } from '../../constants/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import EasyButton from '../../Shared/StyledComponents/EasyButton';
import FormContainer from '../../Shared/Forms/FormContainer';
import Input from '../../Shared/Forms/Input';
import Error from '../../Shared/Error';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import baseUrl from '../../assets/common/baseUrl';
// Context
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthGlobal from '../../Context/store/AuthGlobal';
import { otpLoginUser } from '../../Context/actions/Auth.actions';
import { colors } from '../../assets/global/globalStyles';

var { height } = Dimensions.get('window');

const ResetPassword = (props) => {
  const context = useContext(AuthGlobal);
  const [userName, setUserName] = useState();
  const [phone, setPhone] = useState('7504705571');
  const [token, setToken] = useState();
  const [config, setConfig] = useState();
  const [error, setError] = useState();
  const [fromNav, setFromNav] = useState();
  const [otpInput, setOtpInput] = useState();
  const [randomOtp, setRandomOtp] = useState(0);
  const [otpSent, setOtpSent] = useState();
  const [senderId, setSenderId] = useState('FTWSMS');
  const [message, setMessage] = useState('YOUR OTP:');
  const [route, setRoute] = useState('otp');
  const [otpStatus, setOtpStatus] = useState(1);
  const [smsDbRec, setSmsDbRec] = useState();
  const [userFound, setUserFound] = useState();
  const [smsExpTime, setSmsExpTime] = useState(1);
  const [otpMatched, setOtpMatched] = useState(false);
  const [otpExpired, setOtpExpired] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [resendOtp, setResendOtp] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      props.navigation.navigate('User Profile');
    }
  }, [context.stateUser.isAuthenticated]);

  useEffect(() => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setRandomOtp(otp);

    AsyncStorage.getItem('jwt')
      .then((res) => {
        setToken(res);
      })
      .catch((error) => console.log(error));
    return () => {
      setToken();
    };
  }, []);

  useEffect(() => {
    setConfig({ headers: { Authorization: `Bearer ${token}` } });
    return () => {};
  }, [token]);

  const sendSms = () => {
    if (phone === '' || !(phone.length == 10)) {
      setError('Please enter a valid phone no');
    } else {
      // const otp = Math.floor(100000 + Math.random() * 900000);
      // setRandomOtp(otp);
      axios
        .get(`${baseUrl}users/getbynum/${phone}`)
        .then((res) => {
          const resData = res.data;
          setUserFound(resData);
          if (resData) {
            sendOtpSms();
          }
        })
        .catch((error) => {
          console.log(error);
          alert('This number is not registered with us');
        });
    }
  };

  // Function to send SMS through thr SMS Gateway
  const sendOtpSms = () => {
    const data = {
      sender_id: senderId,
      message: message,
      variables_values: randomOtp,
      route: route,
      numbers: phone,
    };

    console.log(data);

    const config = {
      headers: {
        Authorization: `pdHqa6T9kPNlYrcInUo2WM4OuzSDbKZJgChmQFivxEXe7Ly1B5oqagh3vTCWf0u5nNewzptkOVxbQ4FG`,
      },
    };

    axios
      .post(`https://www.fast2sms.com/dev/bulkV2`, data, config)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          const smsSent = res.data;
          setOtpSent(smsSent);
          saveOtpRec();
        }
      })
      .catch((error) => {
        console.log('2 error while sending sms: ', error);
      });
  };

  const saveOtpRec = () => {
    // Insert a record in otpsms db
    let otpSmsRec = {
      sender_id: senderId,
      message: message,
      otp: randomOtp,
      route: route,
      number: phone,
      status: otpStatus,
    };

    axios
      .post(`${baseUrl}otpsms`, otpSmsRec)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          setSmsDbRec(res.data);
        }
      })
      .catch((error) => {
        console.log('Error while saving otp record', error);
      });
  };

  const verifyOtp = () => {
    if (smsDbRec) {
      const currentDateTime = new Date();
      const dbDate = new Date(smsDbRec.dateCreated);
      const timeOut = new Date(dbDate.getTime() + smsExpTime * 60000);
      if (currentDateTime > timeOut) {
        setOtpVerified(false);
        setOtpExpired(true);
        setResendOtp(true);
        // Update otp record status to 2, i.e, Expired
        let otpSmsRec = {
          sender_id: senderId,
          message: message,
          otp: randomOtp,
          route: route,
          number: phone,
          status: '2',
        };
        axios
          .put(`${baseUrl}otpsms/${id}`, otpSmsRec)
          .then((res) => {
            if (res.status == 200 || res.status == 201) {
              setSmsDbRec(res.data);
            }
          })
          .catch((error) => {
            console.log('Error while updating otp record', error);
          });
        alert('OTP Expired !!! Please resend the code');
      } else {
        // Check the OTP enetered with the sent OTP
        if (otpInput !== smsDbRec.otp) {
          // OTP not matched
          setOtpVerified(false);
          alert('Incorrect OTP Entered !!! Please enter correct OTP');
        } else {
          // OTP matched
          setOtpVerified(true);
          setOtpExpired(false);
          setResendOtp(false);

          // Update otp record status to 1, i.e, verified
          let otpSmsRec = {
            sender_id: senderId,
            message: message,
            otp: randomOtp,
            route: route,
            number: phone,
            status: '1',
          };
          axios
            .put(`${baseUrl}otpsms/${id}`, otpSmsRec)
            .then((res) => {
              if (res.status == 200 || res.status == 201) {
                setSmsDbRec(res.data);
              }
            })
            .catch((error) => {
              console.log('Error while updating otp record', error);
            });
        }
      }
    }
  };

  const updatePassword = () => {
    console.log('In updatePassword');
    console.log('newPassword: ', newPassword);
    console.log('confirmNewPassword: ', confirmNewPassword);
    if (newPassword === '') {
      setError('Please enter new password');
      return;
    }
    if (confirmNewPassword === '') {
      setError('Please reenter new password');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setError('New password & confirm password not matched');
      return;
    }
    let userRec = {
      password: newPassword,
    };
    console.log(`${baseUrl}users/changepassword/${phone}`);
    axios
      .put(`${baseUrl}users/changepassword/${phone}`, userRec)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          setSmsDbRec(res.data);

          Toast.show({
            topOffset: 60,
            type: 'success',
            text1: 'Password changed successfuly',
            text2: ' ',
          });
          setTimeout(() => {
            props.navigation.navigate('Login');
          }, 500);
        }
      })
      .catch((error) => {
        console.log('Error while updating otp record', error);
      });
  };

  return (
    <FormContainer title={''} style={{ height: height }}>
      {!otpSent ? (
        <View>
          <Text style={styles.label}>
            Enter registered phone number to recieve OTP
          </Text>
          <View style={styles.phoneNo}>
            <View style={styles.countryCode}>
              <Text style={styles.countryCodeText}>+91</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder={'Phone'}
              name={'Phone'}
              value={phone}
              keyboardType={'numeric'}
              onChangeText={(text) => setPhone(text)}
            />
          </View>

          <View>
            {error ? <Error message={error} /> : null}

            <TouchableOpacity
              style={[
                styles.buttonStyle,
                { backgroundColor: COLORS.headerTheme4 },
              ]}
              // disabled={!agree}
              onPress={() => sendSms()}
            >
              <Text style={styles.loginText}>SEND OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          {!otpVerified ? (
            <View style={styles.buttonGroup}>
              <Text style={styles.label}>
                Enter the OTP sent to your mobile no
              </Text>
              <View style={styles.phoneNo}>
                <TextInput
                  style={styles.input}
                  placeholder={'XXXXXX'}
                  name={'OtpInput'}
                  value={otpInput}
                  keyboardType={'numeric'}
                  onChangeText={(text) => setOtpInput(text)}
                />
              </View>
              {resendOtp ? (
                <TouchableOpacity onPress={() => sendSms()}>
                  <View style={{ marginVertical: 10 }}>
                    <Text
                      style={{
                        color: colors.buttons,
                        fontSize: 16,
                        textDecorationLine: 'underline',
                      }}
                    >
                      Resend Code
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : null}
              <EasyButton large primary onPress={() => verifyOtp()}>
                <Text style={{ color: 'white' }}>Submit</Text>
              </EasyButton>
            </View>
          ) : (
            <View style={styles.buttonGroup}>
              <Text style={styles.label}>Enter new password</Text>
              <View style={styles.phoneNo}>
                <Input
                  placeholder={'XXXXXX'}
                  name={'NewPassword'}
                  value={newPassword}
                  onChangeText={(text) => setNewPassword(text)}
                />
              </View>

              <Text style={styles.label}>Confirm new password</Text>
              <View style={styles.phoneNo}>
                <Input
                  placeholder={'XXXXXX'}
                  name={'ConfirmNewPassword'}
                  value={confirmNewPassword}
                  onChangeText={(text) => setConfirmNewPassword(text)}
                />
              </View>
              {error ? <Error message={error} /> : null}

              <EasyButton large primary onPress={() => updatePassword()}>
                <Text style={{ color: 'white' }}>Save</Text>
              </EasyButton>
            </View>
          )}
        </View>
      )}

      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: COLORS.headerTheme2 }]}
        // disabled={!agree}
        onPress={() => props.navigation.navigate('Login')}
      >
        <Text style={styles.loginText}>BACK TO LOGIN</Text>
      </TouchableOpacity>
    </FormContainer>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    marginTop: 20,
    height: 40,
    borderRadius: 5,
  },
  loginText: {
    color: 'white',
    paddingTop: 10,
    fontSize: 15,
    // fontFamily: 'regular'
  },
  // buttonGroup: {
  //   marginTop: 40,
  //   width: '80%',
  //   alignItems: 'center',
  // },
  betweenText: {
    marginTop: 20,
    marginBottom: 5,
    alignSelf: 'center',
  },
  inLine: {
    width: '90%',
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
    borderColor: colors.buttons,
  },
  inputProtected: {
    backgroundColor: 'transparent',
  },
  normal18: { fontSize: 18 },
  bold18: { fontWeight: 'bold', fontSize: 18 },
  buttonGroup: {
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  betweenText: {
    marginTop: 20,
    marginBottom: 5,
    alignSelf: 'center',
  },
  phoneNo: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 8,
  },
  countryCode: {
    backgroundColor: 'white',
    borderColor: colors.buttons,
    borderWidth: 1,
    borderRadius: 5,
    padding: 11.3,
    marginBottom: 4,
    marginRight: 10,
  },
  countryCodeText: {
    color: colors.grey1,
    fontWeight: '300',
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: 'white',
    marginTop: 0,
    marginBottom: 5,
    paddingLeft: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.buttons,
    fontWeight: '300',
  },
  label: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 5,
    marginLeft: 5,
  },
});
