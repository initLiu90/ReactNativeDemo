import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {
  FILER_TYPE_COMPLETE,
  FILER_TYPE_ALL,
  FILER_TYPE_ACTIVE,
} from '../actions/type';
import {setFilter} from '../actions/todo';

class Filter extends Component {
  render() {
    const onClick = this.props.onClick;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => onClick(FILER_TYPE_ALL)}>
          <Text>{FILER_TYPE_ALL}</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => onClick(FILER_TYPE_COMPLETE)}>
          <Text>{FILER_TYPE_COMPLETE}</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => onClick(FILER_TYPE_ACTIVE)}>
          <Text>{FILER_TYPE_ACTIVE}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: 80,
    height: 30,
  },
});

const mapDispatchToProp = {
  onClick: setFilter,
};

export default connect(
  null,
  mapDispatchToProp,
)(Filter);
