import React from 'react';
import { Image,View } from 'react-native';
import "../data/data"
import CardGridComponent from '../components/CardGridComponent'
const MainScreen = props => {
  return (
      <View>
        <CardGridComponent/>
      </View>
  );
};

export default MainScreen;