
import React from 'react';
import styles from './style';
import { View, Text, ImageBackground } from 'react-native';
import StyleButton from '../StyleButton';

const CarItem = (props) => {
  // const { name, tagline, taglineCTA, bgimg } = props
    const { name, tagline, taglineCTA, bgimg } = props.car
    
  return (
    <View style={styles.carContainer}>

      <ImageBackground
       source={bgimg}
       style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
            {tagline}
            {' '}
            <Text>
                {taglineCTA}
            </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>

        <StyleButton type="primary" content={'Custom Order'}
          onPress={()=>{
            console.warn('Custom Order Button was Pressed.')
          }}
        />

        <StyleButton
         type="secondary"
         content={'Existing Inventory'}
         onPress={()=>{
            console.warn('Existing Inventory Button was Pressed.')
         }}
        />

      </View>

    </View>
  )
}

export default CarItem

