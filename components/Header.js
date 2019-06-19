import React from 'react';
import {
Image,
View,
Platform,
Text,
StyleSheet
} from 'react-native';

const Header = props => {
    return(
      <View style={headerStyles.container}>
        <View style={headerStyles.arrowContainer}>
          <View style={headerStyles.arrow}/>
          <Image
            resizeMode='contain'
            style={{flex:1, width:35, height:35}}
            source={require('../assets/back.png')}/>
        </View>
      <Text style= {headerStyles.text}>Ash Blossom & Joyous Spring</Text>
      </View>
    );
};

export default Header;

const headerStyles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
  },
  arrowContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow:{
    flex:1,
  },
  text:{
    textAlign:'center',
    flex:10,
    fontSize:17,
    fontWeight:'bold',
  },
})
