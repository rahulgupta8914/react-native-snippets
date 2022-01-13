import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {middleCenter} from '../../commonStyles/style';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Login extends Component {
  render() {
    return (
      <View style={middleCenter}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('mainApp');
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('signup');
          }}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
