import React, { useContext, useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Center, Icon } from 'native-base';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import baseUrl from '../../assets/common/baseUrl';

import AuthGlobal from '../../Context/store/AuthGlobal';
import { logoutUser } from '../../Context/actions/Auth.actions';
import { colors } from '../../assets/global/globalStyles';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
const { height, width } = Dimensions.get('window');
var frm = '';

const UserProfile = (props) => {
  if (
    props.route.params.fromNav !== '' ||
    props.route.params.fromNav !== null
  ) {
    frm = props.route.params.fromNav;
  }

  const [count, setCount] = React.useState(0);
  const context = useContext(AuthGlobal);
  const [profile, setProfile] = useState();

  useFocusEffect(
    useCallback(() => {
      if (
        context.stateUser.isAuthenticated === false ||
        context.stateUser.isAuthenticated === null
      ) {
        props.navigation.navigate('Login');
      } else {
        AsyncStorage.getItem('jwt')
          .then((res) => {
            // const config = { headers: { Authorization: `Bearer ${token}` } };
            axios
              .get(`${baseUrl}users/${context.stateUser.user.userId}`, {
                headers: { Authorization: `Bearer ${res}` },
              })
              .then((user) => {
                setProfile(user.data);

                // console.log('Profile: ', profile);
              });
          })
          .catch((error) => console.log(error));
      }
      return () => {
        setProfile();
        // setOrders();
      };
    }, [context.stateUser.isAuthenticated])
  );

  return (
    <Center style={styles.container}>
      <ScrollView>
        <View
          style={{
            width: width,
            paddingHorizontal: 20,
            paddingBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Text style={{ fontSize: 16 }}>Hi, </Text>
            <Text style={{}}>{profile ? profile.name : ''}</Text>
          </View>

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => [
              AsyncStorage.removeItem('jwt'),
              logoutUser(context.dispatch),
            ]}
          >
            <Icon
              mr="2"
              size="4"
              color={colors.cardBackground}
              as={<MaterialIcons name="logout" />}
            />
            <Text style={{ color: colors.cardBackground }}>Logout</Text>
          </TouchableOpacity>
        </View>
        {profile ? (
          <View>
            <View style={styles.contentContainer}>
              {profile.name ? (
                <View style={styles.userDetails}>
                  <Text style={styles.title}>Name: </Text>
                  <Text style={styles.value}>{profile.name}</Text>
                </View>
              ) : null}

              {profile.address ? (
                <View style={styles.userDetails}>
                  <Text style={styles.title}>Address: </Text>
                  <Text style={styles.value}>{profile.address}</Text>
                </View>
              ) : null}

              {profile.city ? (
                <View style={styles.userDetails}>
                  <Text style={styles.title}>City: </Text>
                  <Text style={styles.value}>{profile.city}</Text>
                </View>
              ) : null}

              {profile.state ? (
                <View style={styles.userDetails}>
                  <Text style={styles.title}>State: </Text>
                  <Text style={styles.value}>{profile.state}</Text>
                </View>
              ) : null}

              {profile.pin ? (
                <View style={styles.userDetails}>
                  <Text style={styles.title}>PIN: </Text>
                  <Text style={styles.value}>{profile.pin}</Text>
                </View>
              ) : null}

              <View style={styles.userDetails}>
                <Text style={styles.title}>Email: </Text>
                <Text style={styles.value}>{profile.email}</Text>
              </View>

              <View style={[styles.userDetails, { marginTop: 5 }]}>
                <Text style={styles.title}>Phone: </Text>
                <Text style={styles.value}>{profile.phone}</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    marginLeft: 5,
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    props.navigation.navigate('ResetPassword');
                  }}
                >
                  <Icon
                    mr="1"
                    size="4"
                    color={colors.buttons}
                    as={<MaterialIcons name="edit" />}
                  />
                  <Text
                    style={{
                      color: colors.buttons,
                      textDecorationLine: 'underline',
                      fontSize: 12,
                    }}
                  >
                    Change phone no
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                }}
                onPress={() => {
                  props.navigation.navigate('EditProfile');
                }}
              >
                <Icon
                  mr="1"
                  size="4"
                  color={colors.buttons}
                  as={<MaterialIcons name="edit" />}
                />
                <Text
                  style={{
                    color: colors.buttons,
                    textDecorationLine: 'underline',
                  }}
                >
                  Edit profile
                </Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.actionView]}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => props.navigation.navigate('Orders')}
              >
                <Icon
                  mr="2"
                  size="6"
                  color={colors.grey2}
                  as={<MaterialIcons name="badge" />}
                />
                <Text style={styles.actionText}>My Orders</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => props.navigation.navigate('UserWishList')}
                // onPress={{}}
              >
                <Icon
                  mr="2"
                  size="6"
                  color={colors.grey2}
                  as={<MaterialCommunityIcons name="cart-heart" />}
                />
                <Text style={styles.actionText}>My Wishlist</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.actionView]}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => props.navigation.navigate('UserTransactions')}
                // onPress={{}}
              >
                <Icon
                  mr="2"
                  size="6"
                  color={colors.grey2}
                  as={<MaterialCommunityIcons name="bank-transfer" />}
                />
                <Text style={styles.actionText}>My Transactions</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.actionButton}
                // onPress={() => props.navigation.navigate('Orders')}
                onPress={{}}
              >
                <Icon
                  mr="2"
                  size="6"
                  color={colors.grey2}
                  as={<MaterialIcons name="support-agent" />}
                />
                <Text style={styles.actionText}>Help Center</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </ScrollView>
    </Center>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  contentContainer: {
    alignSelf: 'center',
    margin: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.grey5,
    borderColor: colors.grey2,
    borderWidth: 0.5,
    width: width - 30,
  },
  order: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 60,
  },
  userDetails: {
    // height: width / 2,
    // backgroundColor: colors.grey5,
    // padding: 20,
    // marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: colors.grey1,
    fontWeight: '600',
  },
  value: {
    color: colors.grey1,
    fontStyle: 'italic',
    marginLeft: 5,
    flexWrap: 'wrap',
  },
  actionView: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // actionButton: {
  //   backgroundColor: colors.buttons,
  //   borderRadius: 5,
  //   paddingHorizontal: 20,
  //   paddingVertical: 10,
  //   marginRight: 10,
  // },
  actionButton: {
    // backgroundColor: colors.buttons,
    width: width / 2 - 30,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    // marginRight: 10,
    borderWidth: 1,
    borderColor: colors.grey2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  // actionText: {
  //   color: colors.cardBackground,
  //   textTransform: 'uppercase',
  // },
  actionText: {
    color: colors.grey2,
    textTransform: 'uppercase',
  },
  logoutButton: {
    // backgroundColor: colors.buttons,
    // width: width / 2 - 30,
    borderRadius: 1,
    paddingHorizontal: 15,
paddingVertical:5,
    // marginRight: 10,
    borderWidth: 1,
    backgroundColor: colors.buttons,
    borderColor: colors.buttons,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
