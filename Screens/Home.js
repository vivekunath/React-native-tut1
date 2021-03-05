import 'react-native-gesture-handler';
import * as React from 'react';
// import React, {useState} from 'react';
import { Button, View, Text, Image, ScrollView, TextInput,SectionList, StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  

  export default HomeScreen;