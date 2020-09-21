import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// import { Text } from "react-native-elements";
// import Spacer from "../../src/components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
// import { AsyncStorage } from "react-native";
import NavLink from '../components/NavLink'
const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  console.log("state is here", state);
  return (
    <View style={styles.container}>
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
