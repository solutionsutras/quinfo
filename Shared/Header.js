import {React} from 'react'
import{View, Text, StyleSheet, Image, SafeAreaView} from 'react-native'
import { colors } from '../assets/global/globalStyles'
import { StatusBar } from 'expo-status-bar';

const Header = () =>{
    return (
      <SafeAreaView style={styles.header}>
        <Image
          source={require('../assets/logo-light.png')}
          resizeMode="contain"
          style={{ height: 30, marginTop:20, }}
        />
        <StatusBar style="light" />
      </SafeAreaView>
    );}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        marginTop:0,
        backgroundColor:colors.statusbar,
    }
})

export default Header;

