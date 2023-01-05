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
import { COLORS, SIZES } from '../../constants/theme';
import { color, Icon } from '@rneui/base';
import { colors } from '../../assets/global/globalStyles';
import { controls } from '../../assets/global/controls';
// import { Table, Row, Rows } from 'react-native-table-component';

var { height, width } = Dimensions.get('window');

const BusesCard = (props) => {
  const { index, item } = props;

  return (
    <ScrollView>
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: 'gray',
            borderRadius: SIZES.font,
            marginBottom: SIZES.base,
            margin: SIZES.font,
            marginTop: 5,
          },
          {
            backgroundColor:
              props.index % 2 == 0 ? colors.grey3 : colors.grey5,
            
          },
        ]}
      // onPress={() =>
      //   props.navigation.navigate('TransactionDetails', { trn: props })
      // }
      >
        <View style={[{ padding: 15,  }, {color: index % 2 == 0 ? colors.white : colors.black}]}>
          <View style={[styles.allText, { flexDirection: 'row' },]}>
            <Text style={styles.listHeader}>#</Text>
            <Text style={[styles.item, { width: width / 15, }]}>{index + 1}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.listHeader}>Reg. No:</Text>
            <Text style={styles.item}>{item.regNo}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.listHeader}>Bus name:</Text>
            <Text style={styles.item}>{item.name}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.listHeader}>Source:</Text>
            <Text style={styles.item}>{item.source}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.listHeader}>Destination:</Text>
            <Text style={styles.item}>{item.destination}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.listHeader}>Fare/KM:</Text>
            <Text style={[styles.item, { width: width / 10 }]}>
              {controls.currency}
              {item.busType.perKmFare}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.listHeader}>Action:</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                type={'MaterialIcons'}
                name="location-on"
                color={COLORS.headerTheme1}
                size={18}
              />
              <Text style={styles.item}>Live location</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default BusesCard;

const styles = StyleSheet.create({
  // shadowProps: {
  //   shadowColor: COLORS.headerTheme4,
  //   elevation: 50,
  // },
  container: {
    // width: '100%',
    height: 220,
    // alignItems: 'center',
    // flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  item: {
    // fontSize: 15,
    // fontWeight: '300',
    // flexWrap: 'wrap',
    // margin: 2,
    // width: width / 7,
    fontSize: 15, paddingLeft: 10,
  },
  listHeader: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  // allText:{
  //   color: index % 2 == 0 ? colors.grey3 : colors.grey5,
  // }
});
