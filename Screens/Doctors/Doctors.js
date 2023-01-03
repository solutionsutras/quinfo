import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../../constants/theme';
import { color, Icon } from '@rneui/base';

const Doctors = () => {
  const [fullData, seFullData] = useState(
    [
      {
        'Name': 'Sumit Kumar Dutta',
        'MedicalName': 'AIIMS',
        'AvlTime': '10.30 AM',
        'CurrentStatus': 'Available',
      },
      {
        'Name': '',
        'MedicalName': '',
        'AvlTime': '',
        'CurrentStatus': '',
      },
      {
        'Name': '',
        'MedicalName': '',
        'AvlTime': '',
        'CurrentStatus': '',
      },
      {
        'Name': '',
        'MedicalName': '',
        'AvlTime': '',
        'CurrentStatus': '',
      },
      {
        'Name': '',
        'MedicalName': '',
        'AvlTime': '',
        'CurrentStatus': '',
      },
      {
        'Name': '',
        'MedicalName': '',
        'AvlTime': '',
        'CurrentStatus': '',
      }
    ]
  )
  return (
    
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ backgroundColor: COLORS.headerTheme4, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'white', margin: 10 }}>
            Doctors Information 👨‍⚕️</Text>
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
            <View style={{ width: '25%' }}>
              <Text style={[styles.text, { height: 40, color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center', paddingTop: 7 }]}>Name</Text>
            </View>
            <View style={{ width: '25%' }}>
              <Text style={[styles.text, { height: 40, color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center', paddingTop: 7 }]}>Medical Name</Text>
            </View>
            <View style={{ width: '25%' }}>
              <Text style={[styles.text, { height: 40, color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center', paddingTop: 7 }]}>Avl. Time</Text>
            </View>
            <View style={{ width: '25%' }}>
              <Text style={[styles.text, { height: 40, color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }]}>Current Status</Text>
            </View>
          </View>
          {
            fullData.map((item, index) =>
              <View style={[styles.shadowProps, { width: '100%', flexDirection: 'row', borderRadius: 10, padding: 10, marginTop: 8 },
               (index % 2 == 0) ? { backgroundColor: '#f0eded' } : { backgroundColor: '#bab6b6' }]} key={index}>
                <View style={{ width: '25%' }}>
                  <Text style={[styles.text, { height: 40, color: 'black', fontSize: 15, textAlign: 'center' }]}>{item.Name}</Text>
                </View>
                <View style={{ width: '25%' }}>
                  <Text style={[styles.text, { height: 40, color: 'black', fontSize: 15, textAlign: 'center' }]}>{item.MedicalName}</Text>
                </View>
                <View style={{ width: '25%' }}>
                  <Text style={[styles.text, { height: 40, color: 'black', fontSize: 15, textAlign: 'center' }]}>{item.AvlTime}</Text>
                </View>
                <View style={{ width: '25%' }}>
                  <Text style={[styles.text, { height: 40, color: 'black', fontSize: 15, textAlign: 'center' }]}>{item.CurrentStatus}</Text>
                </View>
              </View>
            )
          }
          
        </View>
        </ScrollView>
      </View>
  )
};

export default Doctors;

const styles = StyleSheet.create({
  shadowProps: {
    shadowColor: COLORS.headerTheme4,
    elevation: 50,
  },
});
