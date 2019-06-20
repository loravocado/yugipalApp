import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardImageScreen from './screens/CardImage';
import CardGridScreen from './screens/CardGrid';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  CardGrid: CardGridScreen,
  CardImage: CardImageScreen
  },
  {
    initialRouteName: "CardGrid"
  }
);
