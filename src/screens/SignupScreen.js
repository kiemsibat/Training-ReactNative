import React, { useState ,useContext} from "react";
import { View, StyleSheet } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Spacer from "../../src/components/Spacer";
import {Context as AuthContext} from "../context/AuthContext"
const SignupScreen = ({ navigation }) => {
    const {state,signup} = useContext(AuthContext);
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
            // console.log('Email :',email)
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
              // console.log('Password :',Password)
            }}
        />
      </Spacer>
      <Button title="Sign Up" onPress={() => signup({email,password})} />
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
