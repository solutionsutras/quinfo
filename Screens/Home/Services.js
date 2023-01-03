import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
  Keyboard,
  ActivityIndicator,
} from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import baseUrl from '../../assets/common/baseUrl';
import axios from 'axios';

import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../../constants/theme';
import { CircleButton } from '../../components/Button';
import SearchResults from './SearchResults';
import ServicesCard from './ServicesCard';
var { width, height } = Dimensions.get('window');

const Services = (props) => {
  // State variables
  const [servicesData, setServicesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [focus, setFocus] = useState();
  const [active, setActive] = useState();
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setFocus(false);
      setActive(-1);

      // Items
      axios.get(`${baseUrl}services`).then((res) => {
        setServicesData(res.data);
        setLoading(false);
        // console.log('res.data: ', res.data);
      });

      return () => {
        setServicesData([]);
        setFocus();
        setActive();
      };
    }, [])
  );

  return (
    <>
      {loading == false ? (
        <View>
          {focus == true ? (
            <View>
              <SearchResults
                navigation={props.navigation}
                filteredData={filteredData}
              />
            </View>
          ) : (
            <ScrollView>
              {servicesData.length > 0 ? (
                <View style={styles.listContainer}>
                  {servicesData.map((item, index) => {
                    return (
                      <ServicesCard
                        navigation={props.navigation}
                        key={item._id}
                        index={index}
                        item={item}
                        // style={{ width: '100%', flex: 1 }}
                      />
                    );
                  })}
                </View>
              ) : (
                <View style={[styles.center, { height: height / 2 }]}>
                  <Text style={{ fontSize: 16, color: 'gray', textAlign:'center' }}>
                    Wait a moment!!!
                  </Text>
                </View>
              )}
            </ScrollView>
          )}
        </View>
      ) : (
        // Loading will go here
        <View style={styles.spinner}>
          <ActivityIndicator
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            size="large"
            color="orange"
          />
        </View>
      )}
    </>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '60%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  servicesContainer: {
    width: width / 2 - 10,
    height: width / 1.5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 5,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: '#EEE',
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width / 2 - 30,
    height: width / 2 - 50,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 5,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 100,
    width: width / 2 - 30,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  listContainer: {
    // width: '100%',
    minHeight: height,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'gainsboro',
    flexWrap: 'wrap',
  },
  spinner: {
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
