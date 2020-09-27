import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>An Header !</Text>
      </View>
    );
  }
}

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
