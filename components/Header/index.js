import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/icon.png')} />
      <Image style={styles.menu} source={require('../../assets/icon.png')} />

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

    paddingHorizontal: 20,
    
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
})