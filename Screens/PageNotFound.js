import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import { Icon } from 'native-base';
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';

const PageNotFound = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Icon type="IonIcons" name="md-sad-outline" /> */}
      <View style={{ flexDirection: 'row' }}>
        <Icon
          mr="2"
          size="32"
          color="#700"
          as={<Ionicons name="md-sad-outline" />}
        />
      </View>
      <Text
        style={{ fontSize: SIZES.large, color: COLORS.danger, marginTop: 20 }}
      >
        The page you are looking for is not found
      </Text>
    </View>
  );
};

export default PageNotFound;

const styles = StyleSheet.create({});
