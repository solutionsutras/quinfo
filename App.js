import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from './Screens/Home/Home';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, NativeBaseConfigProvider } from 'native-base';
import Header from './Shared/Header';
// Redux
import { Provider } from 'react-redux';
import { store } from './Redux/store';

// Context API
import Auth from './Context/store/Auth';
import RootNavigator from './Navigators/RootNavigator';
import HomeHeader from './components/HomeHeader';
import PrintInvoice from './Shared/PrintInvoice';
import Buses from './Screens/Buses/Buses';

const App = () => {
  const [loaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
  });
  if (!loaded) return null;
  return (
    <Auth>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Header />
            {/* <RootNavigator /> */}
            <Buses/>
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </Auth>
  );
};

export default App;
