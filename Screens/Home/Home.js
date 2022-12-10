import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import ServicesCard from './ServicesCard';
import Services from './Services';

const Home = (props) => {
  
  return (
    <View style={{ zIndex: 1 }}>
      <HomeHeader />
      <Services navigation={props.navigation} />
    </View>
  );
};

export default Home;
