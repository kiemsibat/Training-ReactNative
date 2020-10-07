import React from 'react';
// import {StyleSheet, Text, View, Button} from 'react-native';

import 'react-native-gesture-handler';
// Component

import Signin from './src/screens/Sign/Signin';
import Signup from './src/screens/Sign/Signup';
import Bottom from './src/routes/tabs/Bottom';
// navigation

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import DrawerScreen from './src/screens/DrawerScreen/DrawerScreen';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Bottom" component={Bottom} />
    </Stack.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
