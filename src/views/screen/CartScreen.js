import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
  useWindowDimensions,
  Platform,
  AppState,
} from 'react-native';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import CartCard from '../components/cartCard';
import {checkout} from '../../store/actions/index';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/core';
import MemoCard from '../components/memoCard'

function CartScreen() {
  const navigation = useNavigation();
  const window = useWindowDimensions()
  const [showModal, setShowModal] = useState(false);
  const [showMemo, setShowMemo] = useState(false);
  const products = useSelector((items) => items.Products);
  const dispatch = useDispatch();
  console.log(products);
  let totalCost = 0;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header name={'Cart'} hideCartButton={'true'} />
      {products.length ? (<ScrollView>
        {products.map((product, index) => {
          totalCost = totalCost + product.price;
          return <CartCard key={index} productDetails={product} />;
        })}
      </ScrollView>) : (
        <View style={{alignSelf:"center", marginTop:"50%"}}>
          <Text style={{fontSize:20, fontWeight:"500"}}>CART IS EMPTY</Text>
        </View>
      )}
      
      <View style={styles.checkoutscreen}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={styles.noOfItems}>
            No. of items : {products.length}
          </Text>
          <Text style={styles.totalcost}>Total Cost: ₹{totalCost} </Text>
        </View>
        <View style={{width:150, height:50}}><Button onPress={()=> setShowMemo(true)} title="invoice" disabled={(products.length > 0)? false : true }/></View>
        <View style={styles.checkoutbutton}>
          <Button
            disabled={(products.length > 0)? false : true }
            title="CHECK OUT"
            onPress={() => {
              if(products.length){
              dispatch(checkout());
              setShowModal(true);}
            }
            }
          />
        </View>
      </View>
      <View>
        <Modal isVisible={showModal}>
          <View style={styles.checkoutPopup}>
            <Image
              style={{
                height: 30,
                width: 30,
                alignSelf: 'center',
                marginTop: 20,
              }}
              source={require('../../assets/images/otherImages/exclamation.png')}
            />
            <Text style={{fontSize: 18, alignSelf: 'center', marginTop: 20}}>
              ORDER PLACED
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 120,
                justifyContent: 'space-evenly',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Button
                title="OK"
                color="#00aa00"
                onPress={() => {
                  setShowModal(false);
                  navigation.navigate('ProductsOverview');
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
      <View >
      <Modal isVisible={showMemo}>
      <View style={{backgroundColor:"#3895D3", height:500, borderRadius:25, width: 370}}>
      <View style={{position:"absolute"}}>
      
      </View>
      <View><Text style={{color:"white", fontSize: 30, alignSelf:"center",marginTop:14 }}>₹{totalCost}</Text></View>
      <View style={{position:"absolute", bottom:0, backgroundColor:"white", borderRadius:25, width:370, height:430}}>
        <ScrollView>
        {products.map((product, index) => {
          return <MemoCard key={index} productDetails={product} />;
        })}
        </ScrollView>
      </View>
     
      </View>
      <View style={{width:150, alignSelf:"center", marginTop:5}}>
      <Button title="OK" onPress={()=> setShowMemo(false)} />
      </View>
      </Modal>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkoutscreen: {
    backgroundColor: 'white',
    height: 140,
    position:"absolute",
    bottom:0,
    width:'100%',
    marginTop:2
    
    // marginTop:460
  },
  totalcost: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  checkoutbutton: {
    // marginTop: 2,
  },
  noOfItems: {
    fontSize: 18,
    marginBottom: 15,
    marginLeft: 10,
  },
  checkoutPopup: {
    backgroundColor: 'white',
    height: 200,
    width: 210,
    alignSelf: 'center',
    borderRadius: 10,
  },
});
export default CartScreen;
