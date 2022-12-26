import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { assets, COLORS, SIZES } from '../../constants'
import { color, Icon } from '@rneui/base';
// import { Table, Row, Rows } from 'react-native-table-component';

const Buses = () => {
  // const search = [<View style={{
  //   width: '100%',
  //   borderRadius: SIZES.font - 5,
  //   backgroundColor: COLORS.white,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: SIZES.font,
  //   paddingVertical: SIZES.small - 5,
  // }}>
  //   <Icon type={'font-awesome'} name="search" color={'grey'} size={16} />
  //   <TextInput
  //     placeholder="Search..."
  //     style={{ marginLeft: 10, height: 20 }}
  //   /></View>]
  // const header = ['Reg. No.', 'From', 'Destination', 'fare', 'View Map']
  // const data = [
  //   ['', '', '', '', ''],
  //   ['', '', '', '', ''],
  //   ['', '', '', '', ''],
  //   ['', '', '', '', ''],
  //   ['', '', '', '', ''],
  //   ['', '', '', '', ''],
  //   ['', '', '', '', ''],
  //   ['', '', '', '', '']
  // ]

  const [fullData, seFullData] = useState(
    [
      {
        'RegNo': 1,
        'From': 'KIIT Square',
        'Destination': 'Rasulghar',
        'Fare': '100',
        'ViewMap': '👁️‍🗨️'
      },
      {
        'RegNo': 2,
        'From': 'Patia',
        'Destination': 'Infocity',
        'Fare': '50',
        'ViewMap': '👁️‍🗨️'
      },
      {
        'RegNo': 3,
        'From': '',
        'Destination': '',
        'Fare': '',
        'ViewMap': '👁️‍🗨️'
      },
      {
        'RegNo': 4,
        'From': '',
        'Destination': '',
        'Fare': '',
        'ViewMap': '👁️‍🗨️'
      },
      {
        'RegNo': 5,
        'From': '',
        'Destination': '',
        'Fare': '',
        'ViewMap': '👁️‍🗨️'
      },
      {
        'RegNo': 6,
        'From': '',
        'Destination': '',
        'Fare': '',
        'ViewMap': '👁️‍🗨️'
      }
    ]
  )
  return (
    // <ImageBackground source={assets.busBg} style={{ flex: 1}}>
    // <View style={{backgroundColor:COLORS.headerTheme4}}>
    //   <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'white',margin:10 }}>
    //     Buses Location 📍</Text>
    //   <View style={{
    //     width: '100%',
    //     borderRadius: SIZES.font - 5,
    //     backgroundColor: COLORS.white,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     paddingHorizontal: SIZES.font,
    //     paddingVertical: SIZES.small - 5,
    //     marginBottom: 10
    //   }}>
    //     <Icon type={'font-awesome'} name="search" color={'grey'} size={16} />
    //     <TextInput
    //       placeholder="Search..."
    //       style={{ marginLeft: 10, height: 20 }}
    //     /></View>
    // </View>
    //   <Table borderStyle={{ borderColor: '#c8e1ff', borderWidth: 5 }} style={{padding:10}}>
    //     {/* <Row data={search} style={{ marginBottom: 5 }} /> */}
    //     <Row data={header} textStyle={{ textAlign: 'center', fontWeight: 'bold' }} style={{ backgroundColor: '#c8e1ff', height: 30 }} />
    //     <Rows data={data} style={{ backgroundColor: COLORS.white }} />
    //   </Table>
    // </ImageBackground>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ backgroundColor: COLORS.headerTheme4, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'white', margin: 10 }}>
            Buses Location 📍</Text>
          <View style={{
            width: '100%',
            borderRadius: SIZES.font - 5,
            backgroundColor: COLORS.white,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 5,
            marginBottom: 10
          }}>
            <Icon type={'font-awesome'} name="search" color={'grey'} size={16} />
            <TextInput
              placeholder="Search..."
              style={{ marginLeft: 10, height: 20 }}
            /></View>
        </View>
        <ScrollView>
        <View style={{ padding: 10 }}>
          <View style={{ width: '100%', flexDirection: 'row', borderRadius: 10, backgroundColor: COLORS.headerTheme4, padding: 10 }}>
            <View style={{ width: '20%' }}>
              <Text style={[styles.text, { height: 30, color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }]}>Reg.No.</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={[styles.text, { height: 30, color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }]}>From</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={[styles.text, { height: 30, color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }]}>Destination</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={[styles.text, { height: 30, color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }]}>Fare</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={[styles.text, { height: 30, color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }]}>ViewMap</Text>
            </View>
          </View>
          {
            fullData.map((item, index) =>
              <View style={[styles.shadowProps, { width: '100%', flexDirection: 'row', borderRadius: 10, padding: 10, marginTop: 8 },
               (index % 2 == 0) ? { backgroundColor: '#f0eded' } : { backgroundColor: '#bab6b6' }]} key={index}>
                <View style={{ width: '20%' }}>
                  <Text style={[styles.text, { height: 30, color: 'black', fontSize: 15, textAlign: 'center' }]}>{item.RegNo}</Text>
                </View>
                <View style={{ width: '20%' }}>
                  <Text style={[styles.text, { height: 30, color: 'black', fontSize: 15, textAlign: 'center' }]}>{item.From}</Text>
                </View>
                <View style={{ width: '20%' }}>
                  <Text style={[styles.text, { height: 30, color: 'black', fontSize: 15, textAlign: 'center' }]}>{item.Destination}</Text>
                </View>
                <View style={{ width: '20%' }}>
                  <Text style={[styles.text, { height: 30, color: 'black', fontSize: 15, textAlign: 'center' }]}>{item.Fare}</Text>
                </View>
                <View style={{ width: '20%' }}>
                  <Text style={[styles.text, { height: 30, color: 'black', fontSize: 15, textAlign: 'center' }]}>{item.ViewMap}</Text>
                </View>
              </View>
            )
          }
        </View>
        </ScrollView>
      </View>
  )
}

export default Buses

const styles = StyleSheet.create({
  shadowProps: {
    shadowColor: COLORS.headerTheme4,
    elevation: 50,
  },
})
