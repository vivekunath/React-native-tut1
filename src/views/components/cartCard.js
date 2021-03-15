import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useDispatch} from 'react-redux';
import {deleteProduct} from '../../store/actions/index';
import {addProduct,removeProduct} from '../../store/actions/index'
import Modal from 'react-native-modal';


function CartCard({productDetails}) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const rightSwipe = () => {
    return (
      <TouchableOpacity
        onPress={() => setShowModal(true) }>
        <View style={styles.deleteBox}>
          <Text>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };

  
  function increaseQuantity(){
    dispatch(addProduct(productDetails))
  };
  function decreaseQuantity(){
    dispatch(removeProduct(productDetails.id))
  };


  return (
    <Swipeable renderRightActions={rightSwipe}>
      <View style={styles.container}>
        <Image source={productDetails.image} style={styles.image} />
        <View>
          <Text style={styles.name}>{productDetails.name}</Text>
          <Text style={{marginLeft: 10, width: 280}}>{productDetails.description}</Text>
          <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between'}}>
            <Text style={styles.price}> ₹{productDetails.basePrice}</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
                width: 80
              }}>
              <TouchableOpacity onPress={decreaseQuantity}>
                <Image
                  style={styles.quantityButton}
                  source={require('../../assets/images/otherImages/minus.jpg')}
                />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{productDetails.quantity}</Text>
              <TouchableOpacity onPress={increaseQuantity}>
                <Image
                  style={styles.quantityButton}
                  source={require('../../assets/images/otherImages/plus.jpg')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View>
      <Modal isVisible={showModal}>
      <View style={styles.deletePopup}>
        <Text style={{fontSize:18 ,alignSelf:"center", marginTop:50}}>WANT'S  TO  DELETE ?</Text>
        <View style={{display:"flex", flexDirection:"row", width:120, justifyContent:"space-evenly", alignSelf:"center", marginTop:20}}>
          <Button title="YES" color="#FF0000" onPress={()=> {dispatch(deleteProduct(productDetails.id));setShowModal(false);}}/>
          <Button title="NO" color="#00aa00" onPress={()=> setShowModal(false)}/>
        </View>
        </View>
      </Modal>
      </View>
    </Swipeable>
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
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  deleteProduct: {},
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    width: 100,
    alignItems: 'center',
    height: 120,
  },
  quantityButton: {
    width: 24,
    height: 24,
  },
  quantityText: {
    borderColor: 'black',
    fontWeight:"bold",
    fontSize:20,
    justifyContent:"center"
  },
  deletePopup:{
    backgroundColor:"white",
        height:200,
        width:210,
        alignSelf:"center",
        borderRadius:10,   
  }
});

export default CartCard;
