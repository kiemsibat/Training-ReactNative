import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const name = "Lân Hoàng";
  return (
    <View>
      <Text style={styles.text}>Getting started with react native! </Text>
      {/* {greeting} */}
  <Text style={styles.text1}>My name is : {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  text1: {
    fontSize: 20,
    color: "blue",
  },
});

export default HomeScreen;
