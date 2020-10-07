import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../../screens/HomePage/HomePage';
import SettingPage from '../../screens/SettingPage/SettingPage';
import Drawer from '../drawer/Drawer';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const Tab = createBottomTabNavigator();
function Bottom() {
  return (
    <Tab.Navigator style={styles.footer}>
      <Tab.Screen name="Home" component={HomePage} options={{tabBarBadge: 3}} />
      <Tab.Screen
        name="Settings"
        component={SettingPage}
        options={{tabBarBadge: 3}}
      />
      <Tab.Screen name="Drawer" component={Drawer} options={{tabBarBadge: 3}} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  footer: {
    color: Colors.dark,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    fontSize: 30,
  },
});

export default Bottom;
