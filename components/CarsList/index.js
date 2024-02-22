import { Dimensions, FlatList, StyleSheet, View, Text } from 'react-native'
import React from 'react'

import cars from './cars';
import CarItem from '../CarItem';

const CarsList = () => {
    console.log(cars);

  return (
    <View style={styles.container}>
      {/* <CarItem car={
        {
          name:'Model X of Demo',
          tagline:'Starting at $69.428, Order Online For',
          taglineCTA:"Touchless Delivery",
          bgimg:require('../../assets/images/Model-X.png'),
        }
      }/> */}

        <FlatList
         data={cars}
         renderItem={({item}) => 
            <CarItem car={item} />
         }
        //  renderItem={( {item} ) => <CarItem car={item} />}
         showsVerticalScrollIndicator={false}
         snapToAlignment={'start'}
         decelerationRate={'fast'}
         snapToInterval={Dimensions.get('window').height}
        />
    </View>
  );
};

export default CarsList

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
})
