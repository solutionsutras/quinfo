import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';

const Govt = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: SIZES.large, color: COLORS.headerTheme1 }}>
        Govt Info
      </Text>
    </View>
  );
};

export default Govt;

const styles = StyleSheet.create({});
