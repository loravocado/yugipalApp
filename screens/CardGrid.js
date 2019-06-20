import React, { Component } from 'react';
import { data } from "../data/data";
import { CardImageScreen } from "./CardImage"

//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
//import all the components we will need

export default class CardGridScreen extends Component {
  static navigationOptions = {
  title: 'Cards',
    headerTitleStyle: {
      fontWeight: 'normal',
      textAlign: 'center',
      flex: 1,
    },
};
  constructor() {
    super();
    this.state = {
      cardData: [],
    };
  }


  LoadAllTeaserCards() {
      var allCardsMap = []
      for (set in data){
          //data[set]["cards"].length
          for(cardNum = 0; cardNum < 2; cardNum++){
              let tempCardName = data[set]["cards"][cardNum]["name"]
              let cardData = {
                  cardName: tempCardName,
                  cardSetNumber: data[set]["cards"][cardNum]["set number"],
                  cardSetName: set,
                  cardRarity: data[set]["cards"][cardNum]["rarity"],
                  cardType: data[set]["cards"][cardNum]["card type"],
                  cardDescription: data[set]["cards"][cardNum]["card details"]["Description"],
                  cardArtwork: data[set]["cards"][cardNum]["artwork"],
                  cardImage: data[set]["cards"][cardNum]["image"],
              }

              allCardsMap.push(cardData)
          }
      }
      return allCardsMap
  }

  componentDidMount() {
    this.setState({
      cardData:  this.LoadAllTeaserCards()
    })
  }
  _onPressButton() {
  cardData.findIndex(obj => obj.cardName === email)
  }

  _onLongPressButton() {
  Alert.alert('You long pressed the button!')
  }

  actionOnRow(item, index) {
    return <CardImageScreen/>
  }

  render() {
    const {navigate} = this.props.navigation;
    return (

      <View style={styles.MainContainer}>
        <View style={{flex:12}}>
          <FlatList
            data={this.state.cardData}
            renderItem={({ item, index }) => (
              <View style={{ flex: 1, flexDirection: 'column', margin: 4 }}>
                <TouchableOpacity onLongPress={this._onLongPressButton} onPress={() => navigate('Profile', {name: 'Jane'})} activeOpacity={0.6}>
                <Image resizeMode='contain' style={styles.imageThumbnail} source={{ uri: item.cardImage }} />
                </TouchableOpacity>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 185,
  },
  header: {
    flex:1,
    backgroundColor:'white',
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    flexDirection:'row',
    alignItems:'center',
  },
  text: {
    textAlign:'center',
    flex:10,
    fontSize:17,
    color:'black',
  },
});
