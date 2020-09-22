import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context  } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
// components
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  console.log('signin',clearErrorMessage);
  return (
    <View style={styles.container}>
       <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Signin Screen"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign in"
      />
      <NavLink 
        text="No account ? Signup" 
        routeName="Signup" 
      />
      {/* {console.log('sign in',state.errorMessage)} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
  },
  text: {
    fontSize: 48,
  },
});

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
export default SigninScreen;
