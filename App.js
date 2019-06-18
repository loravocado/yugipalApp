import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardImage from './screens/CardImage';

export default function App() {

  return (
    <View style={styles.container}>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  data: {
    flex: 2,
    backgroundColor: 'white',
  },
})
