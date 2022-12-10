import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';

const Doctors = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: SIZES.large, color: COLORS.headerTheme1 }}>
        Doctors Info
      </Text>
    </View>
  );
};

export default Doctors;

const styles = StyleSheet.create({});
