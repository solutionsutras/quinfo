import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Button,
  Modal,
} from 'react-native';
import { Icon, Heading, VStack, Input, Box, Divider } from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { controls } from '../../../assets/global/controls';
import { colors } from '../../../assets/global/globalStyles';
import EasyButton from '../../../Shared/StyledComponents/EasyButton';

var { width } = Dimensions.get('window');

const ListTransactions = (props) => {
  // console.log('props: ', props);
  const [modalVisible, setModalVisible] = useState(false);
  const [trn, setTrn] = useState(props);
  const [tranDate, setTranDate] = useState(props.transactionDate);

  useEffect(() => {
    setTranDate(
      new Date(props.transactionDate).toLocaleString(undefined, {
        timeZone: 'Asia/Kolkata',
      })
    );

    return () => {};
  }, []);


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
        onPress={() =>
          props.navigation.navigate('UserTransactionDetails', { trn: props })
        }
      >
        <Text style={[styles.item, { width: width / 15 }]}>
          {trn.index + 1}
        </Text>
        <Text style={[styles.item, { width: width / 4 }]}>
          {trn.transactionNo}
        </Text>
        <Text style={[styles.item]}>
          {/* {trn.transactionDate} */}
          {tranDate.split(' ')[2]}-{tranDate.split(' ')[1]}-
          {tranDate.split(' ')[4]}
        </Text>
        <Text style={[styles.item,]}>
          {controls.currency}
          {trn.amount}
        </Text>
        {/* <Text style={styles.item}>{trn.transactionType}</Text> */}
        <Text style={styles.item}>{trn.remarks}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListTransactions;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  image: {
    borderRadius: 15,
    width: width / 6,
    height: 20,
    margin: 2,
  },
  item: {
    fontSize: 11,
    fontWeight: '300',
    flexWrap: 'wrap',
    margin: 2,
    width: width / 5,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.cardBackground,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    borderRadius: 15,
    width: width / 6,
    height: 20,
    margin: 2,
  },
});
