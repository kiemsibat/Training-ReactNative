import React from 'react';
// import {Header} from 'react-native-elements';
import {Button, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import Header from '../../shared-components/Header';
function Feed({navigation}) {
  return (
    <>
      <Header header="DrawerPage" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Text>Feed Screen</Text> */}
        <Button
          title="Drawer"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
    </>
  );
}

export default Feed;
