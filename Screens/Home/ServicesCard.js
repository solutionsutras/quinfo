import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { assets, COLORS, SIZES, SHADOWS, FONTS } from '../../constants/theme';

import { CircleButton } from '../../components/Button';
// import React, { useState } from 'react';
var { height, width } = Dimensions.get('window');
const ServicesCard = (props) => {
  const { item, id, categName, icon, image, index } = props;
  // console.log('In ServicesCard - props.item: ', props.item);
  return (
    <View>
      <TouchableOpacity
        style={styles.servicesContainer}
        onPress={() => props.navigation.navigate(item.pageLink ? item.pageLink : "PageNotFound" )}
      >
        <View style={styles.inner}>
          <Image
            source={{ uri: item.icon }}
            resizeMode="cover"
            style={styles.image}
          />
          <CircleButton imgUrl={assets.heart} left={50} top={10} />
        </View>

        <View style={[styles.inner, { marginTop: 30 }]}>
          <Text style={{ fontSize: SIZES.large - 4 }}>{item.categName}</Text>
          <Text
            style={{
              fontSize: SIZES.large - 6,
              fontWeight: '300',
              marginTop: 5,
            }}
          >
            {item.desc}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  servicesContainer: {
    width: width / 2 - 10,
    height: width / 1.6,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: '#FFF',
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  inner: {
    flex: 1,
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
    height: width / 2 - 130,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
});
