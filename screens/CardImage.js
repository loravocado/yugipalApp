import React from 'react';
import '../data/data';
import {Image} from 'react-native'

const CardImage = props => {
  let pic = {
   uri: 'https://firebasestorage.googleapis.com/v0/b/varathon-a9121.appspot.com/o/Yugioh%2FBooster%20Pack%2FShadows_in_Valhalla%2Fartwork%2FSHVA-EN047_super%20rare.jpg?alt=media'
 };
  return (
    <Image

    source={pic}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
  }}/>
  );
};

export default CardImage;
