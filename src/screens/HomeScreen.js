import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  const name = "Lân Hoàng";
  console.log(navigation)
  return (
    <View>
      <Text style={styles.text}>Getting started with react native! </Text>
      {/* {greeting} */}
      <Text style={styles.text1}>My name is : {name}</Text>
      <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to components Demo"
      style={styles.Button}
      />

      {/*  */}
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate('List')}
        style={styles.Button}
      />
      {/*  */}
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
  Button:{
    marginVertical:50,
    backgroundColor:'yellow'
  }
});

export default HomeScreen;
