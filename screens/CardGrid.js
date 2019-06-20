import React, { Component } from 'react';
//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
//import all the components we will need

export default class CardGrid extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'https://firebasestorage.googleapis.com/v0/b/varathon-a9121.appspot.com/o/Yugioh%2FBooster%20Pack%2FShadow_of_Infinity%2Fimage%2FSOI-EN002_ultra%20rare.jpg?alt=media' };
    });
    that.setState({
      dataSource: items,
    });
  }
  _onPressButton() {
  Alert.alert('You tapped the button!')
}
_onLongPressButton() {
Alert.alert('You long pressed the button!')
}
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.header}>
          <Text style={styles.text}>Cards</Text>
        </View>
      <View style={{flex:12}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 4 }}>
              <TouchableOpacity onLongPress={this._onLongPressButton} onPress={this._onPressButton} activeOpacity={0.6}>
              <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
              </TouchableOpacity>
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  header: {
    flex:1,
    backgroundColor:'white',
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    flexDirection:'row',
    alignItems:'center',
  },
  text: {
    textAlign:'center',
    flex:10,
    fontSize:17,
    color:'black',
  },
});
