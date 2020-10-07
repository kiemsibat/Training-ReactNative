import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Add,Del} from './src/dux/actions/counter'
const App = () => {
  const counting = useSelector(state => state.count);
  const dispatch = useDispatch();
  console.log(counting);

  const handleAdd = () => {
    dispatch(Add());
  }

  const handleDel = () => {
    dispatch(Del());
  }
  return(
    <View>
      <Text>Hello world</Text>
      <Button onPress={handleAdd} title= "+" />
      <Button onPress={handleDel} title= "-"/>
      <Text>{counting}</Text>
    </View>
  )
}

export default App;
