/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList, TouchableHighlight} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import {TODO, DYNAMIC, ASYNC} from '../router';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.items = [TODO, DYNAMIC, ASYNC];
  }

  render() {
    return (
      <FlatList
        data={this.items}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item}
      />
    );
  }

  renderItem = ({item}) => {
    return (
      <TouchableHighlight
        underlayColor="red"
        onPress={() => this.props.navigation.navigate(item)}
        style={{
          backgroundColor: '#DDDDDD',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 1,
          paddingVertical: 20,
        }}>
        <Text>{item}</Text>
      </TouchableHighlight>
    );
  };
}
