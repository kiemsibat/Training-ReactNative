import React from 'react';
import {Text, Button, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import Header from '../../shared-components/Header';

function Notifications({navigation}) {
  return (
    <>
      <Header header="Drawer" />
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

export default Notifications;
