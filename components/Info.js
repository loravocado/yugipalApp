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
      <View style={infoStyles.container}>
      <View style={{flex:1}}/>
      <View style={{flex:12, flexDirection:'column'}}>
      <View style={{flex:1}}/>

      <View style={infoStyles.padding}>
        <Text style={infoStyles.textTitle}>SET</Text>
        <Text style={infoStyles.textInfo}>Cute Anime Girl</Text>
      </View>

      <View style={infoStyles.padding}>
        <Text style={infoStyles.textTitle}>NUMBER</Text>
        <Text style={infoStyles.textInfo}>3.14159265358979</Text>
      </View>

      <View style={infoStyles.padding}>
        <Text style={infoStyles.textTitle}>RARITY</Text>
        <Text style={infoStyles.textInfo}>Super Duper Rare</Text>
      </View>

      <View style={infoStyles.padding}>
        <Text style={infoStyles.textTitle}>CARD TYPE</Text>
        <Text style={infoStyles.textInfo}>Fire type Pokemon</Text>
      </View>

      <View style={infoStyles.description}>
        <Text style={infoStyles.textTitle}>DESCRIPTION</Text>
        <Text style={infoStyles.textInfo}>Nom nom nom nom Nom nom nom Nom nom nom nom Nom nom nomNom nom nom nom Nom nom nomNom nom nom nom Nom nom nomNom nom nom nom Nom nom nomNom nom nom nom Nom nom nomNom nom nom nom Nom nom nomNom nom nom nom Nom nom nomNom nom nom nom Nom nom nomNom nom nom nom Nom nom nomNom nom nom nom Nom nom nomNom nom nom nom Nom nom nomNom nom nom nom Nom nom nomNom nom nom nom Nom nom nom nom</Text>
      </View>

    </View>
  </View>
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
  },
  textTitle:{
    fontSize: 12,
  },
  textInfo:{
    fontSize:15,
    justifyContent:'space-between',
    color:'#676767',
  },
})
