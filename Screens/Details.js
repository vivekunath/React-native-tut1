import 'react-native-gesture-handler';
import * as React from 'react';

import { Button, View, Text, Image, ScrollView, TextInput,SectionList, StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function DetailScreen({navigation}) {
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
    title="Go to Details... again"
    onPress={() => navigation.push('Details')}
  />
  <Button title="Go back" onPress={() => navigation.goBack()} />
  <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

  export default DetailScreen;