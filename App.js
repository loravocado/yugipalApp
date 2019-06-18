import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardImage from './screens/CardImage.js'

export default function App() {
  getImageCard = () => {

  }
  return (
    <View style={styles.container}>
      <CardImage onGetImage={this.getImageCard}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
