import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { assets, COLORS, SIZES } from '../../constants';
import { color, Icon } from '@rneui/base';
import { colors } from '../../assets/global/globalStyles';
import { controls } from '../../assets/global/controls';
// import { Table, Row, Rows } from 'react-native-table-component';

var { height, width } = Dimensions.get('window');

const BusesData = (props) => {
  const { index, item } = props;

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor:
              props.index % 2 == 0 ? colors.cardBackground : colors.grey5,
          },
        ]}
        // onPress={() =>
        //   props.navigation.navigate('TransactionDetails', { trn: props })
        // }
      >
        <Text style={[styles.item, { width: width / 15 }]}>{index + 1}</Text>
        <Text style={styles.item}>{item.regNo}</Text>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.source}</Text>
        <Text style={styles.item}>{item.destination}</Text>
        <Text style={[styles.item, { width: width / 10 }]}>
          {controls.currency}
          {item.busType.perKmFare}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            type={'MaterialIcons'}
            name="location-on"
            color={COLORS.headerTheme1}
            size={18}
          />
          <Text style={styles.item}>Live location</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BusesData;

const styles = StyleSheet.create({
  shadowProps: {
    shadowColor: COLORS.headerTheme4,
    elevation: 50,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 11,
    fontWeight: '300',
    flexWrap: 'wrap',
    margin: 2,
    width: width / 7,
  },
});
