import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {middleCenter} from '../../commonStyles/style';

export default class AuthBootStrap extends Component {
  async componentDidMount() {
    const token = await AsyncStorage.getItem('token');
    this.props.navigation.navigate(token ? 'mainApp' : 'auth');
  }
  render() {
    return (
      <View style={middleCenter}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
