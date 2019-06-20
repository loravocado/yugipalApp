import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen'
import CardImage from './screens/CardImage';
import CardGrid from './screens/CardGrid';
export default function App() {

  return (
    <View style={{flex:1}}>
      <CardGrid/>
    </View>
  );
}
