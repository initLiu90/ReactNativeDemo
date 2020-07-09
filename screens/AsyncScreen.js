/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {fetchArticle} from '../actions/wan';
import {connect} from 'react-redux';
import {FlatList, Text} from 'react-native';

class AsyncScreen extends Component {
  componentDidMount() {
    //dispatch action
    this.props.fetchArticle();
  }

  render() {
    const data = this.props.articles;
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => `${index}:${item.id}`}
      />
    );
  }

  renderItem({item}) {
    return (
      <Text style={{marginVertical: 20, backgroundColor: '#BBFFFF'}}>
        {JSON.stringify(item)}
      </Text>
    );
  }
}

const mapDispatchToProps = {
  fetchArticle: fetchArticle,
};

const mapStateToProps = state => {
  return {
    articles: state.wan.articles,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AsyncScreen);
