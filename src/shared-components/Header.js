import React from 'react';
import {View} from 'react-native';
import {Header} from 'react-native-elements';
const HeaderPage = ({header}) => {
  return (
    <View>
      <Header
        placement="left"
        centerComponent={{text: `${header}`, style: {color: '#fff'}}}
      />
    </View>
  );
};

export default HeaderPage;
