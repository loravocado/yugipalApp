import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CentralImage from '../components/CentralImage';
import  Header  from '../components/Header';
import Info from '../components/Info';

const CardImage = props => {
  return (
    <View style={{flex:1}}>
    <View style={styles.padding}/>
    <View style={styles.container}>
      <Header/>
      <View style={styles.image}>
        <CentralImage/>
      </View>
      <View style={styles.data}>
        <Info/>
      </View>
    </View>
    </View>
  );
}


const styles = StyleSheet.create ({
  container: {
    flex: 29,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  padding:{
    flexDirection:'column',
    flex:1,
    textAlign:'center',
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

export default CardImage;
