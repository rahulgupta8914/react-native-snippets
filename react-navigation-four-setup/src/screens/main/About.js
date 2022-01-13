import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {middleCenter} from '../../commonStyles/style';

export default class About extends Component {
  render() {
    return (
      <View style={middleCenter}>
        <Text>About</Text>
      </View>
    );
  }
}
