import React,  { Component ,useState, useEffect} from 'react';
import {SafeAreaView,Image, Text,View,StyleSheet,ScrollView, Button,TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/core';
import {addProduct, deleteProduct} from '../../store/actions/index'
import {useSelector,useDispatch} from 'react-redux';  
import Modal from 'react-native-modal';


function ProductsDetails({route}){
    const imageDetails = route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isModalVisible, setModalVisible] = useState(false);
    
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    function AddToCart (imageDetails){
        dispatch(addProduct(imageDetails));
        toggleModal();
    }
   

    return (
      <SafeAreaView>
        <Header />
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={imageDetails.image} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.imageName}>{imageDetails.name}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 10, marginTop:5}}>
              Product Details:
            </Text>
            <Text style={{fontSize: 15, marginLeft: 10, marginBottom:5}}>
              {imageDetails.description}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
              Price: ₹{imageDetails.basePrice}
            </Text>
          </View>
          <View style={styles.Button}>
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
        <View style={styles.modalcover}>
          <Modal isVisible={isModalVisible} style={styles.modal}>
            <View style={styles.modalView}>
            <Image
              style={styles.tick}
              source={require('../../assets/images/otherImages/tickImage.png')}
            />
            <Text style={styles.itemAddedtocart}>Item added to cart</Text>
              <Text style={styles.imagename}>{imageDetails.name}</Text>
              <TouchableOpacity
               onPress={() => setModalVisible(false)}>
              <Image
               
                source={require('../../assets/images/otherImages/okButton.png')}
                style={styles.okButton}
              />
              </TouchableOpacity>
            </View>
          </Modal>
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
        fontWeight:"bold",
        fontSize:22,
        backgroundColor:"white",
    },
    imageContainer:{
        marginTop:12,
        backgroundColor:"white",
    },
    nameContainer:{
        backgroundColor:"white",
        marginTop:8,
        justifyContent:"center",
        height:32
    },
    detailsContainer:{
        backgroundColor:"white",
        marginTop:8,
        fontSize:18,
    },
    priceContainer:{
        backgroundColor:"white",
        marginTop:8,
        height:30
    },
    Button:{
        marginTop:15,
        display:"flex",
        flexDirection:"row",
        alignSelf:"center",
        justifyContent:"space-between",
        width:210
    },
    modal:{
      flex:1 
    },
    modalcover:
    {
        flex: 1
    },
    modalView:{
        backgroundColor:"white",
        height:265,
        width:210,
        alignSelf:"center",
        borderRadius:20,   
    },
    imagename:{
        fontWeight:"600",
        alignSelf:"center",
        fontSize:15
    },
    tick:{
      height:40,
      width:40,
      alignSelf:"center",
      marginTop:20
    },
    itemAddedtocart:{
     fontSize:22,
     alignSelf:"center",
    fontWeight:"bold",
    marginTop:25

    },
    okButton:{
      
      height:40,
      width:40,
      alignSelf:"center",
      marginTop:80
    }
})

export default ProductsDetails;