import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CentralImage from '../components/CentralImage';
import Info from '../components/Info';

export default class CardImageScreen extends Component {
  static navigationOptions = {
  title: 'Card Name',
  headerTitleStyle: {
    fontWeight: 'normal',
    textAlign: 'center',
    flex: 1,
    alignSelf: "center",
  },
  backTitle: "",
  headerRight: <View/>
};

render() {
  const {navigate} = this.props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <CentralImage/>
      </View>
      <View style={styles.data}>
        <ScrollView contentContainerStyle={styles.scroll}>
        <Info/>
        </ScrollView>
      </View>
    </View>

    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  scroll: {
    flexGrow: 1,
    flexDirection: 'column',
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
});
