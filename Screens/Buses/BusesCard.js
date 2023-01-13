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
            backgroundColor: 'white',
            borderRadius: SIZES.font,
            marginBottom: SIZES.base,
            margin: SIZES.font,
            marginTop: 5,
          },
          // {
          //   backgroundColor:
          //     props.index % 2 == 0 ? colors.grey3 : colors.grey5,

          // },

        ]}
      >
        <ImageBackground
          source={require('../../assets/images/busCardbg.png')} resizeMode="cover" style={{ height: '90%' }}>
          <View style={[{ padding: 15, }, { color: index % 2 == 0 ? colors.white : colors.black }]}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text style={[, { fontSize: 20, fontWeight: 'bold' }]}>{item.name}</Text>
                <Text>{item.regNo}</Text>
              </View>
              <Text style={[styles.item, { width: width / 10 }, { fontSize: 17, fontWeight: 'bold' }]}>
                {controls.currency}
                {item.busType.perKmFare}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20, alignItems: 'center' }}>
              <Text style={{ paddingTop: 7, fontWeight: 'bold' }}>{item.source}</Text>
              <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>.</Text>
                <Text style={{ paddingTop: 10 }}>....</Text>
                <View style={{ borderWidth: 1, borderColor: 'black', height: 19, width: 60, marginTop: 15, borderRadius: 7 }}><Text style={{ textAlign: 'center' }}>00.00 hr</Text></View>
                <Text style={{ paddingTop: 10 }}>....</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>.</Text>
              </View>
              <Text style={{ paddingTop: 7, fontWeight: 'bold' }}>{item.destination}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ borderWidth: 1.5, borderColor: 'black', borderRadius: 5, height: 30, width: 60, marginTop: 15, backgroundColor:'white' }}>
                <Text style={{ fontSize: 18, textAlign: 'center', fontWeight:'bold' }}>Seats</Text>
              </View>

              <View style={{ borderWidth: 1, width: 70, borderRadius: 5, backgroundColor:'white' }}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, paddingLeft: 10 }}>
                  <Icon
                    type={'MaterialIcons'}
                    name="star"
                    color={COLORS.headerTheme1}
                    size={18}
                    style={{ paddingRight: 2 }}
                  />
                  <Text style={{}}>4.1</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 2, paddingLeft: 8 }}>
                  <Icon
                    type={'MaterialIcons'}
                    name="verified-user"
                    color={COLORS.headerTheme1}
                    size={16}
                    style={{ paddingRight: 2 }}
                  />
                  <Text>6345</Text>
                </View>
              </View>
            </View>
            <Text style={{ color: 'gray', }}>
              __________________________________________________________
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
              <Icon
                type={'MaterialIcons'}
                name="location-on"
                color={COLORS.headerTheme1}
                size={18}
              />
              <Text style={styles.item}>Live location</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>

    </ScrollView >
  );
};

export default BusesCard;

const styles = StyleSheet.create({
  container: {
    height: 220,
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 6,
    backgroundColor: '#FFF',
  },
  item: {
    fontSize: 15, paddingLeft: 10,
  },
  listHeader: {
    fontSize: 17,
    fontWeight: 'bold'
  },
});
