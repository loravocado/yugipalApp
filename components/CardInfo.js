import React from 'react';
import {
Image,
View,
Platform,
Text,
StyleSheet,
ScrollView,
} from 'react-native';

const CardInfo = props => {
    return(

      <View style={infoStyles.container}>
        <View style={infoStyles.containerPadding}/>
        <View style={infoStyles.textContainer}>
          <View style={infoStyles.containerPadding}/>

          <View style={infoStyles.padding}>
            <Text style={infoStyles.textTitle}>SET</Text>
            <Text style={infoStyles.textInfo}>{props.data["cardSetName"]}</Text>
          </View>

          <View style={infoStyles.padding}>
            <Text style={infoStyles.textTitle}>NUMBER</Text>
            <Text style={infoStyles.textInfo}>{props.data["cardSetNumber"]}</Text>
          </View>

          <View style={infoStyles.padding}>
            <Text style={infoStyles.textTitle}>RARITY</Text>
            <Text style={infoStyles.textInfo}>{props.data["cardRarity"]}</Text>
          </View>

          <View style={infoStyles.padding}>
            <Text style={infoStyles.textTitle}>CARD TYPE</Text>
            <Text style={infoStyles.textInfo}>{props.data["cardType"]}</Text>
          </View>

          <View style={infoStyles.padding}>
            <Text style={infoStyles.textTitle}>DESCRIPTION</Text>
            <Text style={infoStyles.description}>{props.data["cardDescription"]}</Text>
          </View>
        </View>
      </View>
  );
};

export default CardInfo;

const infoStyles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
  },
  containerPadding: {
    flex:1,
  },
  padding:{
    margin:10,
  },
  textContainer: {
    flex:35,
    flexDirection:'column',
  },
  textTitle:{
    fontSize: 12,
    fontWeight: 'bold',
  },
  textInfo:{
    fontSize:15,
    justifyContent:'space-between',
    color:'#676767',
    textTransform: 'capitalize',
  },
  description: {
    fontSize:15,
    justifyContent:'space-between',
    color:'#676767',
  },
})
