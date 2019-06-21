import React from 'react';
import {
  Image,
  Alert
} from 'react-native';
import ImageLoader from '../components/ImageLoader';

const CentralImage = props => {
  let pic = {
   uri: props.cardArtwork
 };
  return (
    <ImageLoader
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

export default CentralImage;
