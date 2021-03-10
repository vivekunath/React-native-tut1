import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

function Header(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {!props.hideBackButton && (
          <Image
            style={styles.backButton}
            source={require('../../assets/images/otherImages/backButton.png')}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.screen}>{props.name}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
        {!props.hideCartButton && <Image
          style={styles.cartButton}
          source={require('../../assets/images/otherImages/shopingCart.png')}
        />}
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2a9df4',
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginTop: 3,
  },
  cartButton: {
    width: 30,
    height: 30,
    marginTop: 6,
    marginRight: 5,
  },
  screen: {
    fontFamily: 'Copperplate',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
       alignSelf:"center",
       position:"relative"
  },
});
