import { React } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { colors } from '../assets/global/globalStyles';
import { StatusBar } from 'expo-status-bar';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={require('../assets/logo-light.png')}
        resizeMode="contain"
        style={styles.headerLogo}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colors.statusbar,
  },
  headerLogo: {
    height: 20,
    marginTop: 20,
    marginBottom: 5,
  },
});

export default Header;
