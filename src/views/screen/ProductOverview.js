import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import colors from '../../const/colors';
import contents from '../../const/contents';
import Card from '../components/Card';
import Header from '../components/Header';

const ProductOverview = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Header hideBackButton={'true'} name={'Products'} />
      <ScrollView>
        {contents.map((image, index) => {
          return <Card key={index} imgDetails={image} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: colors.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default ProductOverview;
