import React, {Component} from 'react';
import Librarys from './Librarys';
import * as RNFS from 'react-native-fs';
import {ActivityIndicator} from 'react-native';

export class Dynamic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    RNFS.readFileAssets('bundle.js')
      .then(content => {
        const plugin = (function() {
          // eslint-disable-next-line no-unused-vars
          const __MY_SPACE_LIBRARIES = Librarys;
          // eslint-disable-next-line no-eval
          return eval(content).default;
        })();
        this.setState({plugin: plugin});
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const {plugin: PluginComponent} = this.state;
    if (PluginComponent) {
      return <PluginComponent />;
    } else {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
  }
}
