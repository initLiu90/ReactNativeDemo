/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {TextInput, View, Text, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {inputText: ''};
  }

  render() {
    const onclick = this.props.onclick;
    return (
      <View style={{flexDirection: 'row', margin: 10}}>
        <TextInput
          onChangeText={text => {
            this.setState({inputText: text});
          }}
          style={{
            flex: 3,
            borderColor: 'gray',
            borderWidth: 1,
            textAlign: 'center',
          }}
          value={this.state.inputText}
        />
        <TouchableHighlight
          onPress={() => {
            if (this.state.inputText) {
              onclick(this.state.inputText);
              this.setState({inputText: ''});
            }
          }}
          underlayColor="red"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            flex: 1,
          }}>
          <Text>add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
// const mapDispatchToProp = dispatch => {
//   return {
//     onclick: text => dispatch(addTodo(text)),
//   };
// };
const mapDispatchToProp = {
  onclick: addTodo,
};
export default connect(
  null,
  mapDispatchToProp,
)(AddTodo);
