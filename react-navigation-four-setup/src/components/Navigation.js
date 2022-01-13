import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import AuthBootStrap from '../screens/auth/AuthBootStrap';
import Home from '../screens/main/Home';
import Profile from '../screens/main/Profile';
import Search from '../screens/main/Search';
import AddPost from '../screens/main/AddPost';
import About from '../screens/main/About';

const AuthStack = createStackNavigator(
  {
    login: {
      screen: Login,
    },
    signup: {
      screen: SignUp,
    },
  },
  {
    headerMode: 'none',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Home,
    Search,
    AddPost,
    Profile,
    More: About,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused ? 'ios-home' : 'md-home';
        } else if (routeName === 'Search') {
          iconName = focused ? 'ios-search' : 'md-search';
        } else if (routeName === 'AddPost') {
          iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
        } else if (routeName === 'Profile') {
          iconName = focused ? 'ios-contact' : 'md-contact';
        } else if (routeName === 'More') {
          iconName = focused ? 'ios-settings' : 'md-settings';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      authLoader: AuthBootStrap,
      auth: AuthStack,
      mainApp: TabNavigator,
    },
    {
      initialRouteName: 'authLoader',
      headerMode: 'none',
    },
  ),
);
