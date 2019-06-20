import React from 'react';
import { View, Text } from 'react-native';
import { data } from "../data/data"
import CardTeaserComponent from "./CardTeaserComponent"
const CardGridComponent = props => {
    LoadAllTeaserCards.bind(this)
    RenderAllTeaserCards.bind(this)

    var allCardsMap = {}
    // console.log(data["Shadows_in_Valhalla"])
    function RenderAllTeaserCards(){ 
        Object.keys(allCardsMap).map(function(key) {
            // console.log(key)
            return <CardTeaserComponent data={allCardsMap[key]} />
            // <Text style={{width: 100, height: 100}}>{key}</Text>
        });
    }

    function LoadAllTeaserCards() {
        for (set in data){
            //data[set]["cards"].length
            for(cardNum = 0; cardNum < 10; cardNum++){
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

                allCardsMap[tempCardName] = cardData
                
                // console.log(cardImage)
            }
        }
    }
    return (
        
        <View styles={{flexWrap: "wrap", flexDirection: 'row'}}>
            {LoadAllTeaserCards()}
            {/* <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'powderblue'}} /> */}
            {/* <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'steelblue'}} />
            <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'steelblue'}} />
            <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'powderblue'}} /> */}
            {RenderAllTeaserCards()}
            {/* <CardTeaserComponent style={{width: 100, height: 100, backgroundColor: 'powderblue'}} />             */}
        </View>
    );
};

export default CardGridComponent;