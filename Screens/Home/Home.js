import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import InfoCard from '../../components/InfoCard';

const Home = () => {
  return (
    <View>
      <View style={{ zIndex: 1 }}>
        <HomeHeader />
        <InfoCard />
      </View>

      {/* <View style={{ height: 300, backgroundColor: '#136641' }}>
                </View>
                <View style={{ flex: 1, backgroundColor: 'white' }}></View> */}
    </View>
  );
};

export default Home;
