import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Screen from './src/screens/Screen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen'
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen'
import SquareScreen from './src/screens/SquareScreen'
import TextInput from './src/screens/TextInput'
// import { Component } from 'react';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:Screen,
    List:ListScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color:ColorScreen,
    Square:SquareScreen,
    TextInput:TextInput,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home"
    }
  }
);

export default createAppContainer(navigator);
