
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardImageScreen from './screens/CardImage';
import CardGridScreen from './screens/CardGrid';
import {createStackNavigator, createAppContainer} from 'react-navigation';

// export default function App() {
//
//   return (
//     <View style={{flex:1}}>
//       <CardGridScreen/>
//     </View>
//   );
// }

const MainNavigator = createStackNavigator({
  Home: {screen: CardGridScreen},
  Profile: {screen: CardImageScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
