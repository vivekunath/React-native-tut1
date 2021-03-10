import React from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
import CartCard from '../components/cartCard';
function CartScreen({navigation}) {
  const products = useSelector((items) => items.Products);
  return (
    <SafeAreaView>
      <Header name={'Cart'} hideCartButton={'true'} />
      <ScrollView>
        {products.map((product, index) => {
          return <CartCard key={index} productDetails={product} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
export default CartScreen;
