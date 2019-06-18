import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardImage from './screens/CardImage';
import  Header  from './components/Header';

export default function App() {

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.image}>
      <CardImage/>
      </View>
      <View style={styles.data}/>
    </View>
  );
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  image: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  data: {
    flex: 6,
    backgroundColor: 'white',
  },
})
