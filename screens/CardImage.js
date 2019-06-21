import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView,Alert } from 'react-native';
import CentralImage from '../components/CentralImage';
import CardInfo from '../components/CardInfo';
import FadeInView from '../components/FadeInView';


export default class CardImageScreen extends Component {
static navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.data["cardName"],
  headerTitleStyle: {
    fontWeight: 'normal',
    textAlign: 'center',
    flex: 1,
    alignSelf: "center",
    fontSize: 18,
  },
  backTitle: "",
  headerRight: <View/>
});

render() {

  const {navigate} = this.props.navigation

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <CentralImage cardArtwork = {this.props.navigation.state.params.data["cardArtwork"]}/>
      </View>
      <View style={styles.data}>
        <FadeInView>
        <ScrollView contentContainerStyle={styles.scroll}>
        <CardInfo data = {this.props.navigation.state.params.data}/>
        </ScrollView>
        </FadeInView>
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
