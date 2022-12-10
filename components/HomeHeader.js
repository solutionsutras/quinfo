import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';
import AuthGlobal from '../Context/store/AuthGlobal';
import { checkLogin } from './CheckLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import baseUrl from '../assets/common/baseUrl';
import { Icon } from '@rneui/base';

const HomeHeader = () => {
  const context = useContext(AuthGlobal);
  const [user, setUser] = useState();

  useEffect(() => {
    if (
      context.stateUser.isAuthenticated === false ||
      context.stateUser.isAuthenticated === null
    ) {
      setUser(null);
    } else {
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
  }, []);

  return (
    <View
      style={{
        backgroundColor: COLORS.headerTheme4,
        padding: SIZES.font - 2,
        zIndex: 1,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello {user ? user.name.split(' ')[0] : 'Dear citizen'} 👋 Welcome to
          Quinfo
        </Text>
        <View style={{}}>
          <Image
            source={assets.userid}
            resizeMode="contain"
            style={{ width: 24, height: 18, cursor: 'pointer' }}
          />
        </View>
      </View>
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
          }}
        >
          <Icon type={'font-awesome'} name="search" color={'grey'} size={16} />
          {/* <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          /> */}
          <TextInput
            placeholder="Search..."
            style={{ marginLeft: 10, height: 20 }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
