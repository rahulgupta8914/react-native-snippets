import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {middleCenter} from '../../commonStyles/style';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class SignUp extends Component {
  render() {
    return (
      <View style={middleCenter}>
        <Text>Signup</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('login');
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
