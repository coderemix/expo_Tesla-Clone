
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style'

const StyleButton = (props) => {
    const { type, content, onPress } = props
    
    const backgroundColor = type === "primary" ? '#171A20CC' : 'grey';
    const textColor = type === "primary" ? 'grey' : '#171A20CC';


  return (
    <View style={styles.container}>
        <Pressable
         style={[styles.button, {backgroundColor: backgroundColor}]}
         onPress={()=>{
            console.warn('Hey.')
            onPress()
         }}
        >
            <Text style={[styles.text, {color: textColor}]}>{content}</Text>
        </Pressable>
    </View>
  )
}

export default StyleButton