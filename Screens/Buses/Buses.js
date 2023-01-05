import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  Keyboard,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import baseUrl from '../../assets/common/baseUrl';
import BusesCard from './BusesCard';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { color, Icon } from '@rneui/base';
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../../constants/theme';
import SearchBuses from './SearchBuses';

var { height, width } = Dimensions.get('window');

const ListHeader = () => {
  return (
    <View style={styles.listHeader}>
      <View style={[styles.headerItem, { width: width / 15 }]}>
        <Text style={styles.listHeaderText}>#</Text>
      </View>
      <View style={[styles.headerItem]}>
        <Text style={styles.listHeaderText}>Reg. No</Text>
      </View>
      <View style={[styles.headerItem]}>
        <Text style={styles.listHeaderText}>Bus name</Text>
      </View>
      <View style={[styles.headerItem]}>
        <Text style={styles.listHeaderText}>Source</Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={styles.listHeaderText}>Destination</Text>
      </View>
      <View style={[styles.headerItem, { width: width / 10 }]}>
        <Text style={styles.listHeaderText}>Fare/KM</Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={styles.listHeaderText}>Action</Text>
      </View>
    </View>
  );
};

const Buses = (props) => {
  const [busesData, setBusesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [focus, setFocus] = useState(false);
  const [active, setActive] = useState();
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

  useFocusEffect(
    useCallback(() => {
      setFocus(false);
      setActive(-1);

      axios.get(`${baseUrl}buses`).then((res) => {
        setBusesData(res.data);
        setFilteredData(res.data);
        setLoading(false);
        // console.log('res.data: ', res.data);
      });

      return () => {
        setBusesData([]);
        setFocus();
        setActive();
        setLoading();
      };
    }, [])
  );

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
    Keyboard.dismiss();
  };

  const seachBuses = (text) => {
    setFilteredData(
      busesData.filter(
        (i) =>
          i.regNo.toLowerCase().includes(text.toLowerCase()) ||
          i.name.toLowerCase().includes(text.toLowerCase()) ||
          i.busType.source.toLowerCase().includes(text.toLowerCase()) ||
          i.busType.destination.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View>
      {loading == false ? (
        <View>
          <View style={{ backgroundColor: COLORS.white }}>
            <View
              style={{
                backgroundColor: COLORS.headerTheme4,
                paddingHorizontal: 5,
              }}
            >
              <Text style={styles.pageTitle}>Buses Location</Text>
              <View style={styles.inLineRow}>
                <View style={styles.searchContainer}>
                  <Icon
                    type={'MaterialIcons'}
                    name="search"
                    color={'grey'}
                    size={18}
                  />
                  <TextInput
                    placeholder="Search..."
                    style={styles.input}
                    onFocus={openList}
                    onChangeText={(text) => seachBuses(text)}
                  />
                  {/* {focus ? ( */}
                  <Icon
                    type={'MaterialIcons'}
                    name="close"
                    color={focus ? '#333' : '#EEE'}
                    size={18}
                    onPress={onBlur}
                    style={{ position: 'relative', right: 1 }}
                  />
                  {/* ) : null} */}
                </View>
                <View style={styles.locationContainer}>
                  <Icon
                    type={'MaterialIcons'}
                    name="location-on"
                    color={'white'}
                    size={16}
                  />
                  <Text style={styles.locationText}>Jajpur, Odisha</Text>
                </View>
              </View>
            </View>
            
            
            <ScrollView>
              <View style={{ padding: 2 }}>
                {/* <ListHeader /> */}
              </View>
              {filteredData.length > 0 ? (
                <View>
                  <View style={styles.listContainer}>
                    {filteredData.map((item, index) => {
                      return (
                        <BusesCard
                          navigation={props.navigation}
                          key={item._id}
                          index={index}
                          item={item}
                        />
                      );
                    })}
                  </View>
                </View>
              ) : (
                <View style={[styles.center, { height: height / 2 }]}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'gray',
                      textAlign: 'center',
                    }}
                  >
                    No data to show !!!
                  </Text>
                </View>
              )}
            </ScrollView>
            {/* )} */}
          </View>
        </View>
      ) : (
        // Loading will go here
        <View style={styles.spinner}>
          <ActivityIndicator
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              top: height / 2 - 40,
              height: 20,
            }}
            size="large"
            color="orange"
          />
        </View>
      )}
    </View>
  );
};

export default Buses;

const styles = StyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: COLORS.grey2,
    borderRadius: 2,
    elevation: 1,
  },
  headerItem: {
    margin: 3,
    width: width / 7,
  },
  listHeaderText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
    marginTop: 5,
    marginBottom: 10,
  },
  inLineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  searchContainer: {
    width: width * 0.65,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginLeft:10
  },
  input: {
    height: 32,
    alignSelf:'flex-start'
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    width: width * 0.3,
    // borderWidth: 0.5,
    // borderColor: '#EFEFEF',
    // marginLeft: 3,
  },
  locationText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 12,
    fontStyle: 'italic',
  },
});
