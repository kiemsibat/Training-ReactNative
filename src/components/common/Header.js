import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({headerText}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    height: 50,
  },
  text: {
    color: 'white',
  },
});
export {Header};
