import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'

const SearchResults = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: COLORS.primary, fontSize: SIZES.extraLarge }}>
        SearchResults
      </Text>
    </View>
  );
};

export default SearchResults

const styles = StyleSheet.create({})