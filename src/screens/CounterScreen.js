import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="Tang" onPress={() => setCounter(counter + 1)} />
      <Button title="Giam" onPress={() => setCounter(counter - 1)} />
      <Text>Counter : {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
