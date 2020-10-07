import {createDrawerNavigator} from '@react-navigation/drawer';
// import {DrawerActions} from '@react-navigation/native';
import React from 'react';
import {Text, Button, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
// import {Header} from 'react-native-elements';
import Header from '../../shared-components/Header';
function Feed({navigation}) {
  return (
    <>
      <Header header="SettingPage" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  );
}
const Drawer = createDrawerNavigator();
function Notifications({navigation}) {
  return (
    <>
      <Header
        placement="left"
        centerComponent={{text: 'Drawer', style: {color: '#fff'}}}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Notifications Screen</Text>
        <Button
          title="go Back"
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        />
      </View>
    </>
  );
}
const HomePage = () => {
  return (
    <>
      <Drawer.Navigator screenOptions={{gestureEnabled: false}}>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    </>
  );
};

export default HomePage;
