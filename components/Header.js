import React from 'react';
import {
View,
Platform,
Text,
StyleSheet
} from 'react-native';

const Header = props => {
    return(
      <View style={{flex:1.5, backgroundColor: 'white'}}>
      <Text style= {{textAlign:'center'}}>Ash Blossom & Joyous Spring</Text>
      </View>
    );
};

export default Header;
