import React,{useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
  } from 'react-native';
  import Modal from 'react-native-modal';

  function MemoCard ({productDetails}) {
      console.log(productDetails)
      return(
      <View style={{backgroundColor:"#FFF5EE",display:"flex", flexDirection:"row", borderRadius:25, marginTop:10}}>
        {/* <View style={{}}>
            <Image style={{width:50, height:50}} source={productDetails.image}/>
        </View> */}
        <View style={{display:"flex"}}>
            <Text style={{fontSize:15, fontWeight:"bold", marginLeft:15}}>Name - {productDetails.name}</Text>
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize:13, fontWeight:"bold", marginLeft:15}}>Price: ₹{productDetails.basePrice}</Text>
                <Text style={{fontSize:13, fontWeight:"bold", marginLeft:15}}>Qty. - {productDetails.quantity}</Text>
                <Text style={{fontSize:13, fontWeight:"bold", marginLeft:120}}>Total: ₹{productDetails.price}</Text>
            </View>
        </View>
      </View>
      )
  }

  const styles = StyleSheet.create({

  })

  export default MemoCard;

