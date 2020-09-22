import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from '../components/NavLink'
import { NavigationEvents } from "react-navigation";
const SignupScreen = () => {
  const { state, signup,clearErrorMessage,tryLocalSignin} = useContext(AuthContext);
  
  useEffect(() => {
    tryLocalSignin();
  },[])

  return (
    <View style={styles.container}>
       <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Sign Up"
      />
      <NavLink
        text="Already have an account ? Sign In"
        routeName="Signin"
      />
      {/* {console.log('signup',state.errorMessage)} */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    justifyContent: "center",
    marginTop: 100,
    // backgroundColor: "#A8D1DE",
  },
  error: {
    color: "red",
    fontSize: 20,
  },
});

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
export default SignupScreen;
