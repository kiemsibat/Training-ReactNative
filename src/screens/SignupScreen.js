import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Spacer from "../../src/components/Spacer";

const SignupScreen = ({ navigation }) => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Signup for tracker</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={(email) => {
            setEmail(email)
            console.log('Email :',text)
          }}
          type="Email"
        />
      </Spacer>
      <Spacer>
        <Input
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => {
              setPassword(password)
              console.log('Password :',text)
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
      marginBottom:10,
      backgroundColor:'#A8D1DE'

  }
});

SignupScreen.navigationOptions = () => {
    return{
        header:() => false
    };
};
export default SignupScreen;
