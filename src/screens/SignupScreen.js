import React, {useContext} from "react";
import { View, StyleSheet ,TouchableOpacity} from "react-native";
import {Text } from "react-native-elements";
import Spacer from "../../src/components/Spacer";
import {Context as AuthContext} from "../context/AuthContext"
import AuthForm from '../components/AuthForm'
import {AsyncStorage} from 'react-native';
const SignupScreen = ({ navigation }) => {
    const {state,signup} = useContext(AuthContext);

    console.log('state is here',state);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}      
        onSubmit={signup}
        submitButtonText="Sign Up"
      />
      <Spacer>
        <Text onPress={() => navigation.navigate('Signin')} style={styles.link}>
          Already have an account ? Sign in instead 
        </Text>
      </Spacer>
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
  },
  error:{
      color:'red',
      fontSize:20
  },
  link:{
    color:'blue',

  }
});

SignupScreen.navigationOptions = () => {
    return{
        header:() => false
    };
};
export default SignupScreen;
