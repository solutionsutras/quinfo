import React, { useState, useEffect, useContext } from 'react';
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
} from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import baseUrl from '../../../assets/common/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthGlobal from '../../../Context/store/AuthGlobal';

import { colors } from '../../../assets/global/globalStyles';
import { controls } from '../../../assets/global/controls';
import EasyButton from '../../../Shared/StyledComponents/EasyButton';
import ListTransactions from './ListTransactions';
var { height, width } = Dimensions.get('window');

const ListHeader = () => {
  return (
    <View style={styles.listHeader}>
      <View style={[styles.headerItem, { width: width / 15 }]}>
        <Text style={styles.listHeaderText}>#</Text>
      </View>
      <View style={[styles.headerItem, { width: width / 4 }]}>
        <Text style={styles.listHeaderText}>Tran. no</Text>
      </View>
      <View style={[styles.headerItem]}>
        <Text style={styles.listHeaderText}>Tran. date</Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={styles.listHeaderText}>Amount</Text>
      </View>
      {/* <View style={styles.headerItem}>
        <Text style={styles.listHeaderText}>Order no</Text>
      </View> */}
      <View style={styles.headerItem}>
        <Text style={styles.listHeaderText}>Remarks</Text>
      </View>
    </View>
  );
};
const UserTransactions = (props) => {
    const context = useContext(AuthGlobal);
  const [transactionsList, setTransactionsList] = useState();
  const [transactionsFilter, setTransactionsFilter] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();
  const [config, setConfig] = useState();

  useEffect(() => {
    AsyncStorage.getItem('jwt')
      .then((res) => {
        setToken(res);
      })
      .catch((error) => console.log(error));

    return () => {};
  }, []);

  useEffect(() => {
    setConfig({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return () => {};
  }, [token]);

  useEffect(() => {
    axios
      .get(
        `${baseUrl}transactions/getbyuser/${context.stateUser.user.userId}`,
        config
      )
      .then((res) => {
        setTransactionsList(res.data);
        setTransactionsFilter(res.data);
        setLoading(false);
      })
      .catch((error) => console.log('Error in loading transaction records'));

    return () => {
      setTransactionsList();
      setTransactionsFilter();
      setLoading(true);
    };
  }, [config]);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <FlatList
          data={transactionsFilter}
          ListHeaderComponent={ListHeader}
          renderItem={({ item, index }) => (
            <ListTransactions
              {...item}
              navigation={props.navigation}
              index={index}
            />
          )}
          key={(item) => item.id}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default UserTransactions;

const styles = StyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.grey2,
    elevation: 1,
  },
  listHeaderText: {
    color: colors.cardBackground,
    fontSize: 11,
    fontWeight: '300',
  },
  headerItem: {
    margin: 2,
    width: width / 5,
  },
  spinner: {
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginBottom: 90,
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: width,
    margin: 0,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    justifyContent: 'space-evenly',
    borderColor: colors.grey5,
    borderTopWidth: 1,
  },
  buttonText: {
    marginLeft: 2,
    color: 'white',
  },
});
