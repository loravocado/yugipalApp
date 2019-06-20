import React from 'react';
import { View, Image } from 'react-native';
import { data } from "../data/data"
const CardTeaserComponent = props => {
    
    return (
        <View>
            {/* {console.log(uri: props.data.cardImage)} */}
            <Image source={{uri: props.data.cardImage}}/>
        </View>
    );
};

export default CardTeaserComponent;