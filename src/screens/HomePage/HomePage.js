import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Text, Button, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
// import {Header} from 'react-native-elements';
import CustomDrawerContent from '../../customHook/CustomDrawerContent';
import Header from '../../shared-components/Header';
function Feed({navigation}) {
  return (
    <>
      <Header header="HomePage" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </>
  );
}

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
const Drawer = createDrawerNavigator();
const HomePage = () => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    </>
  );
};

export default HomePage;
