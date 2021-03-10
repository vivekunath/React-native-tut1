import React,  { Component } from 'react';
import {SafeAreaView,Image, Text,View,StyleSheet,ScrollView, Button} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/core';
import {addProduct, deleteProduct} from '../../store/actions/index'
import {useSelector,useDispatch} from 'react-redux';  



function ProductsDetails({route}){
    const imageDetails = route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    function AddToCart (imageDetails){
        dispatch(addProduct(imageDetails))
    }

    return(
    <SafeAreaView>
        <Header />
        <View>
        <View style={styles.imageContainer}>
        <Image
            style={styles.image}    
            source={imageDetails.image}
        /> 
        </View>
        <View style={styles.nameContainer}>
        <Text style={styles.imageName}>{imageDetails.name}</Text>    
        </View>
        <View style={styles.detailsContainer}>
             <Text style={{fontSize:17, fontWeight:"bold", marginLeft:10}}>Product Details:</Text>
            <Text style={{fontSize:15, marginLeft:10}}>{imageDetails.description}</Text>
        </View>
        <View style={styles.priceContainer}>
            <Text style={{fontSize:20, fontWeight:"bold", marginLeft:10}}>Price:  {imageDetails.price}</Text>
        </View>
        <View  style={styles.Button}>
        <Button
            onPress={() => AddToCart(imageDetails)}
            title="ADD TO CART"
        />
        <Button
            onPress={() => navigation.navigate('CartScreen')}
            title="GO TO CART"
        />
        </View>
        </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image:{
        alignSelf:"center",
        marginTop:50,
       
    },
    imageName:{
        alignSelf:"center",
        marginTop:10,
        fontWeight:"bold",
        fontSize:22,
        backgroundColor:"white"
    },
    imageContainer:{
        marginTop:12,
        backgroundColor:"white",
    },
    nameContainer:{
        backgroundColor:"white",
        marginTop:8,
        justifyContent:"center"
    },
    detailsContainer:{
        backgroundColor:"white",
        marginTop:8,
        fontSize:18,
    },
    priceContainer:{
        backgroundColor:"white",
        marginTop:8
    },
    Button:{
        marginTop:15,
        display:"flex",
        flexDirection:"row",
        alignSelf:"center",
        justifyContent:"space-between",
        width:210
    }
})

export default ProductsDetails;