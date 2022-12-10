import React, { useState, useEffect, useContext, useCallback } from 'react';
import AuthGlobal from '../Context/store/AuthGlobal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import baseUrl from '../assets/common/baseUrl';

export const checkLogin = () => {
  const context = useContext(AuthGlobal);
  if (
    context.stateUser.isAuthenticated === false ||
    context.stateUser.isAuthenticated === null
  ) {
    return null;
  } else {
    AsyncStorage.getItem('jwt')
      .then((res) => {
        axios
          .get(`${baseUrl}users/${context.stateUser.user.userId}`, {
            headers: { Authorization: `Bearer ${res}` },
          })
          .then((user) => {
            console.log('checllogin - user: ', user.data);
            return user.data;
          });
      })
      .catch((error) => console.log(error));
  }
};
