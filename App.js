import React from 'react';
import {Text, View, StyleSheet,Button} from 'react-native';
import Header from './src/components/Header';
import AlbumsList from './src/components/AlbumsList';
const App = () => {
  const onHandleClick = () => {
    console.log('hello world');
  }

  return (
    <>
    <Header headerText="AlbumsList"/>
    <AlbumsList/>
    </>
  );
};

const styles = StyleSheet.create({});
export default App;
