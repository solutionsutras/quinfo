import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { assets, COLORS, FONTS, SIZES } from '../constants/theme';
import AuthGlobal from '../Context/store/AuthGlobal';
import { checkLogin } from './CheckLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import baseUrl from '../assets/common/baseUrl';
import { Icon } from '@rneui/base';

const HomeHeader = () => {
  const context = useContext(AuthGlobal);
  const [user, setUser] = useState();

  useFocusEffect(
    useCallback(() => {
      if (context.stateUser.isAuthenticated === true) {
        AsyncStorage.getItem('jwt')
          .then((res) => {
            axios
              .get(`${baseUrl}users/${context.stateUser.user.userId}`, {
                headers: { Authorization: `Bearer ${res}` },
              })
              .then((userRec) => {
                setUser(userRec.data);
              });
          })
          .catch((error) => console.log(error));
      }

      return () => {};
    }, [])
  );

  useEffect(() => {
    // console.log('user.avtar: ', user.avtar);
    return () => {};
  }, [user]);

  return (
    <View
      style={{
        backgroundColor: COLORS.headerTheme4,
        padding: SIZES.font - 2,
        zIndex: 1,
      }}
    >
      {user ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <View style={styles.profileImageView}>
            <Image
              source={
                user.avtar && user.avtar !== ' '
                  ? { uri: user.avtar }
                  : assets.userid
              }
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: COLORS.white,
            }}
          >
            Hello {user ? user.name.split(' ')[0] : 'Dear citizen'} 👋 Welcome
            to Quinfo
          </Text>
        </View>
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      {/* 
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.small,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Find the Information
        </Text>
      </View> */}

      <View style={{ marginTop: 10 }}>
        <View
          style={{
            width: '100%',
            borderRadius: SIZES.font - 5,
            backgroundColor: COLORS.white,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 5,
            justifyContent: 'space-between',
          }}
        >
          <Icon type={'font-awesome'} name="search" color={'grey'} size={16} />
          <TextInput
            placeholder="Search..."
            style={{ marginLeft: 10, height: 20 }}
          />
          <Icon type={'font-awesome'} name="close" color={'grey'} size={16} 
          // onPress={onblur}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  profileImageView: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#EEE',
    padding: 2,
  },
  image: {
    width: 18,
    height: 18,
    cursor: 'pointer',
  },
});
