import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import CarsList from './components/CarsList';
import Header from './components/Header';
// import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>

        {/* <Text>Open up App.js to start working on your app!</Text> */}

      {/* <View style={styles.carContainer}>
        <ImageBackground
         source={require('./assets/images/Model-X.png')}
         style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69.428</Text>
        </View>
      </View> */}

      {/* <CarItem
        name={'Model X'}
        tagline={'Starting at $69.428, Order Online For'}
        taglineCTA={"Touchless Delivery"}
        bgimg={require('./assets/images/Model-X.png')}
       /> */}

      {/* {
        car = {{
          name: 'Model X',
          tagline: 'Starting at $69.428, Order Online For',
          taglineCTA: "Touchless Delivery",
          bgimg: require('./assets/images/Model-X.png'),
        }}
      }
       <CarItem
        car={car}
       /> */}

       <Header />
       
       <CarsList />

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  carContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fcc',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',  //  contain|cover
    position: 'absolute',
  },
  
});
