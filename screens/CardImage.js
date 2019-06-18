import React from 'react';
import '../data/data';
import {Image} from 'react-native'

const CardImage = props => {
  let pic = {
   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
 };
  return (
    <Image
    resizeMode="contain"
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
