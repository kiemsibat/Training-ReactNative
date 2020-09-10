import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Screen from './src/screens/Screen'
// import { Component } from 'react';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:Screen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Components"
    }
  }
);

export default createAppContainer(navigator);
