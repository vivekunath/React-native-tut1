import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Text,Badge} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';

function Header(props) {
  const products = useSelector((items) => items.Products);
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
        {!props.hideCartButton && <View><Image
          style={styles.cartButton}
          source={require('../../assets/images/otherImages/shopingCart.png')}
        />
        {products.length > 0 &&
          <View style={styles.badgeView}><Text style={styles.badge}>{products.length}</Text></View>}
        </View>
        }
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
    width: 50,
    height: 40,
    marginLeft: 5,
    marginTop: 0,
    
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
  badge:{
    fontSize:17,
    fontWeight:"bold",
    position:"absolute",
    marginLeft:3,
    alignSelf:"center"
  
    
  },
  badgeView:{
    position:"absolute",
    backgroundColor:"#39FF14",
    borderRadius:22/2,
    width:22,
    height:22,
    alignSelf:"center"
    // borderradius: 50%,
  }
});
