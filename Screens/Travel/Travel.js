import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants/theme';

const Travel = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: SIZES.large, color: COLORS.headerTheme1 }}>
        Travel Info
      </Text>
    </View>
  );
};

export default Travel;

const styles = StyleSheet.create({});
