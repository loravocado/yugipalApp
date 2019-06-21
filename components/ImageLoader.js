import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated
 } from 'react-native';

export default class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 550,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
          },
          this.props.style,
        ]}
      />
    );
  }
}
