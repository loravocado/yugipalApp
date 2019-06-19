import React from 'react';
import {
Image,
View,
Platform,
Text,
StyleSheet,
ScrollView,
} from 'react-native';

const Info = props => {
    return(
      <ScrollView>
      <View style={infoStyles.container}>
        <View style={{flex:1}}/>
        <View style={{flex:12, flexDirection:'column'}}>
          <View style={{flex:2}}/>
          <View style={infoStyles.padding}>
            <Text style={infoStyles.textTitle}>SET</Text>
            <Text style={infoStyles.textInfo}>Set</Text>
          </View>
          <View style={infoStyles.padding}>
            <Text style={infoStyles.textTitle}>NUMBER</Text>
            <Text style={infoStyles.textInfo}>Card Type</Text>
          </View>
          <View style={infoStyles.padding}>
            <Text style={infoStyles.textTitle}>RARITY</Text>
            <Text style={infoStyles.textInfo}>Rarity</Text>
          </View>
          <View style={infoStyles.padding}>
            <Text style={infoStyles.textTitle}>CARD TYPE</Text>
            <Text style={infoStyles.textInfo}>Card Type</Text>
          </View>
          <View style={infoStyles.description}>
            <Text style={infoStyles.textTitle}>DESCRIPTION</Text>
            <Text style={infoStyles.textInfo}>Elemental HERO Neos + Neo-Spacian Dark Panther + Neo-Spacian Glow MossMust first be Special Summoned (from your Extra Deck) by shuffling the above cards you control into the Deck. (You do not use Polymerization.) Once per turn, during the End Phase: Shuffle this card into the Extra Deck, and if you do,Set all face-up monsters on the field. Once per turn, during your Main Phase 1: You can toss a coin 3 times. 3 Heads: Destroy all monsters your opponent</Text>
          </View>
        </View>
        <View style={{flex:1}}/>
      </View>
      </ScrollView>
);
};

export default Info;

const infoStyles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
  },
  padding:{
    flex:4,
  },
  description:{
    flex:7,
    justifyContent:'space-between',
  },
  textTitle:{
    fontSize: 12,
    fontWeight: 'bold',
  },
  textInfo:{
    fontSize:15,
    justifyContent:'space-between'
  },
})
