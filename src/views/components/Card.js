import {useNavigation} from '@react-navigation/core';
import React,{useState} from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Card = ({imgDetails}) => {
  const navigation = useNavigation();
  // const [selectedItem, setSelectedItem] = useState("");
  return (
    <View style={style.main}>
      <TouchableOpacity
        style={style.card}
        onPress={() => navigation.navigate('ProductsDetails', imgDetails)}>
        <Image
          style={style.image}
          resizeMode="cover"
          source={imgDetails.image}
        />
        <View>
          <Text style={style.name}>{imgDetails.name}</Text>
          <Text style={style.description}>{imgDetails.description}</Text>
          <Text style={style.price}>{imgDetails.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    //   marginTop:0,
    width: 250,
    height: 250,
    alignItems: 'center',
    position: 'relative',
   
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#f2fcff',
    marginLeft: 5,

    marginTop: 10,

    alignItems: 'center',
    position: 'relative',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Copperplate',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'auto',
    width: 150,
    marginLeft:10,
  },
  price: {
    fontSize: 22,
    marginTop: 90,
    fontWeight:"bold",
    marginLeft:95
    
  },
  main: {
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
  },
  description:{
    width:150,
    marginLeft:10,
    fontSize:15,
  },
});

export default Card;
