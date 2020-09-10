import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Screen from './src/screens/Screen'
import ListScreen from './src/screens/ListScreen'
// import { Component } from 'react';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:Screen,
    List:ListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "ListScreen"
    }
  }
);

export default createAppContainer(navigator);
