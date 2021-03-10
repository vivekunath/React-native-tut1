import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';

function CartCard({productDetails}) {
  return (
    <View style={styles.container}>
      <Image source={productDetails.image} style={styles.image} />
      <View>
      <Text style={styles.name}>{productDetails.name}</Text>
      <Text style={styles.price}>{productDetails.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  container: {
    height: 120,
    backgroundColor: 'white',
    marginBottom: 3,
    marginTop: 3,
    display:"flex",
    flexDirection:"row"
  },
  name:{
    fontSize:18,
    fontWeight:"bold",
    marginLeft:10
  },
  price:{
    fontWeight:"bold",
    fontSize:20,
    marginLeft:250,
    marginTop:55.

  }
});

export default CartCard;
