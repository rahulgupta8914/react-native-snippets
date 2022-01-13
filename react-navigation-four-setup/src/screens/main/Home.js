import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {middleCenter} from '../../commonStyles/style';

export default class Main extends Component {
  render() {
    return (
      <View style={middleCenter}>
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('auth');
          }}>
          <Text>Logout</Text>
          {/* <Button
            title="Go to Settings"
            onPress={() => this.props.navigation.navigate('auth')}
          /> */}
        </TouchableOpacity>
      </View>
    );
  }
}
