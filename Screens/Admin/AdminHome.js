import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Button,
} from 'react-native';
import { Icon, Center, VStack, Input, Box, Divider } from 'native-base';
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import axios from 'axios';
import baseUrl from '../../assets/common/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { colors } from '../../assets/global/globalStyles';
import { controls } from '../../assets/global/controls';
import EasyButton from '../../Shared/StyledComponents/EasyButton';
// import AdminTopTabNavigator from '../../../Navigators/AdminNavigator/AdminTopTabNavigator';
var { height, width } = Dimensions.get('window');

const AdminHome = (props) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();
  const [itemsCount, setItemsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [vehiclesCount, setVehiclesCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [transactionsCount, setTransactionsCount] = useState(0);
  const [tripsCount, setTripsCount] = useState(0);
  const [config, setConfig] = useState();

  useEffect(() => {
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
    setConfig({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return () => {
      setConfig();
    };
  }, [token]);

  // useEffect(() => {
  //   // Counts
  //   axios
  //     .get(`${baseUrl}itemdetails/get/count`, config)
  //     .then((res) => setItemsCount(res.data.itemsCount))
  //     .catch((error) => console.log('Error in loading item count: ', error));

  //   // Orders Count
  //   axios
  //     .get(`${baseUrl}orders/get/count`, config)
  //     .then((res) => setOrdersCount(res.data.ordersCount))
  //     .catch((error) => console.log('Error in loading orders count: ', error));

  //   // Vehicles Count
  //   axios
  //     .get(`${baseUrl}vehicles/get/count`, config)
  //     .then((res) => setVehiclesCount(res.data.vehiclesCount))
  //     .catch((error) =>
  //       console.log('Error in loading vehicles count: ', error)
  //     );

  //   // Transactions Count
  //   axios
  //     .get(`${baseUrl}transactions/get/count`, config)
  //     .then((res) => setTransactionsCount(res.data.transactionsCount))
  //     .catch((error) => console.log('Error in loading transactions count'));

  //   // Trips Count
  //   axios
  //     .get(`${baseUrl}logistics/get/count`, config)
  //     .then((res) => setTripsCount(res.data.logisticsCount))
  //     .catch((error) => console.log('Error in loading logistics count'));

  //   // Users Count
  //   axios
  //     .get(`${baseUrl}users/get/count`, config)
  //     .then((res) => setUsersCount(res.data.usersCount))
  //     .catch((error) => console.log('Error in loading users count: ', error));

  //   return () => {
  //     setToken();
  //     setItemsCount(0);
  //     setOrdersCount(0);
  //     setVehiclesCount(0);
  //     setTransactionsCount(0);
  //     setTripsCount(0);
  //     setUsersCount(0);
  //   };
  // }, [config]);

  // useEffect(() => {
  //   return () => {
  //   };
  // }, []);

  return (
    <View style={{ backgroundColor: colors.cardBackground }}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Admin Dashboard</Text>
        <Text style={{}}>Admin Dashboard Follows</Text>
      </View>

      {/* <View style={styles.container}>

      </View> */}
    </View>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 90,
    minHeight: height + 400,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  boxContainer: {
    margin: 5,
    marginTop: 0,
    padding: 10,
    borderColor: colors.grey3,
    borderWidth: 1,
  },
  titleView: {
    marginTop: 1,
    padding: 5,
    backgroundColor: colors.grey5,
    borderColor: colors.grey3,
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
    color: colors.grey2,
    textAlign: 'center',
  },
  totalView: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  totalViewText: {
    fontSize: 16,
  },
  counterText: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '500',
    color: colors.grey2,
  },
  buttonsBox: {
    margin: 5,
  },
  buttonsContainer: {
    marginTop: 0,
    flexDirection: 'row',
    position: 'relative',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
