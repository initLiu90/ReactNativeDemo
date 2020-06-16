/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {
  FILER_TYPE_ALL,
  FILER_TYPE_COMPLETE,
  FILER_TYPE_ACTIVE,
} from '../actions/type';
import {updateTodo} from '../actions';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({item}) => {
    const onComplete = this.props.onComplete;
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.item}>{item.text}</Text>
        {item.complete ? null : (
          <TouchableHighlight
            onPress={() => onComplete(item.id)}
            underlayColor="red"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#DDDDDD',
              marginVertical: 8,
              marginRight: 10,
            }}>
            <Text>complete</Text>
          </TouchableHighlight>
        )}
      </View>
    );
  };

  render() {
    const data = this._filteData();
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={item => `${item.id}`}
      />
    );
  }

  _filteData() {
    const todos = this.props.todos;
    const filter = this.props.filter;
    switch (filter) {
      case FILER_TYPE_ACTIVE:
        return todos.filter(item => !item.complete);
      case FILER_TYPE_COMPLETE:
        return todos.filter(item => item.complete);
      case FILER_TYPE_ALL:
        return todos;
      default:
        return todos;
    }
  }
}

const mapStateToProps = state => {
  return {todos: state.todo, filter: state.filter};
};

const mapDispatchToProps = {
  onComplete: updateTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    flex: 1,
  },
});
