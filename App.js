import 'react-native-gesture-handler';
import * as React from 'react';
// import React, {useState} from 'react';
import { Button, View, Text, Image, ScrollView, TextInput,SectionList, StyleSheet,StatusBar } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'
import HomeScreen from './Screens/Home'
import DetailScreen from './Screens/Details'


const Stack = createStackNavigator();


function App() {
  useEffect(  () => {
    SplashScreen.hide();
    
  })
    return (
      <View style={StyleSheet.container}>
     <NavigationContainer>
     <StatusBar backgroundColor="#4f6d7a" barStyle="Light-content"/>
       <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Details" component={DetailScreen}/>
       </Stack.Navigator>
     </NavigationContainer>
     </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#4f6d7a',
    
  }
})
export default App;