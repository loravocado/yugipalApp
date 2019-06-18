import React from 'react';
import { Button } from 'react-native';

const cardImage = props => {
  return (
    <Button title="Image goes here" onPress={props.onGetImage} />
  );
};

export default cardImage;
