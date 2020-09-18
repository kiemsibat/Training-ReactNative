import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Spacer from "../../src/components/Spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Spacer>
        <Text h3>Signup for tracker</Text>
      </Spacer>
      <Spacer>
        <Input
          // placeholder="Username"
          label="Username"
        />
      </Spacer>
      <Spacer>
        <Input
          //   placeholder="Password"
          label="Password"
          secureTextEntry={true}
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
});

export default SignupScreen;
