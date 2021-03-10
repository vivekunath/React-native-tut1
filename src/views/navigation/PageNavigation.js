import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import ProductsOverview from '../screen/ProductOverview';
import ProductsDetails from '../screen/ProductsDetails';
import CartScreen from '../screen/CartScreen';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet, StatusBar} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {useRoute} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '../../store/Store';

const Stack = createStackNavigator();

function PageNavigation() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#4f6d7a" barStyle="Light-content" />
        <Stack.Navigator
          initialRouteName="ProductOverView"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="ProductsOverview" component={ProductsOverview} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="ProductsDetails" component={ProductsDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default PageNavigation;
