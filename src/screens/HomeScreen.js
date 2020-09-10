import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
 
  return (
    <View>
      <Text style={styles.text}>Getting started with react native! </Text>
      {/* Go to Components */}
      <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to components Demo"
      style={styles.Button}
      />

      {/* Go to List */}
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate('List')}
        style={styles.Button}
      />
      {/* Go to ImageScreen  */}
      <Button
        title="Go to Image"
        onPress={() => navigation.navigate('Image')}
        style={styles.Button}
      />
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
