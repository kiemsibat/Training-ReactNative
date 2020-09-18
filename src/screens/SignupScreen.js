import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Spacer from "../../src/components/Spacer";

const SignupScreen = ({ navigation }) => {
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Signup for tracker</Text>
      </Spacer>
      <Spacer>
        <Input
          // placeholder="Username"
          label="Username"
          value={userName}
          onChangeText={(text) => {
            setUserName(text)
            console.log(text)
          }}
        />
      </Spacer>
      <Spacer>
        <Input
          //   placeholder="Password"
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => {
              setPassword(text)
              console.log(text)
            }}
        />
      </Spacer>

      <Button title="Sign Up" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container:{
      flex:1,
      justifyContent:'center',
      marginBottom:10
  }
});

SignupScreen.navigationOptions = () => {
    return{
        header:() => false
    };
};
export default SignupScreen;
