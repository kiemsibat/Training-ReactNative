import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const greeting = "hello mai fen";
  return (
    <View>
      <Text style={styles.text}>Home Screen </Text>
      <Text style={styles.text1}>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  text1: {
    fontSize: 20,
    color:'blue'
  },
});

export default HomeScreen;
