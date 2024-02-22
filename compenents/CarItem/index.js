
import React from 'react'
import styles from './style'
import { View, Text, ImageBackground } from 'react-native'

const CarItem = (props) => {
    const { name, tagline, taglineCTA, bgimg } = props
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

      </View>

    </View>
  )
}

export default CarItem

