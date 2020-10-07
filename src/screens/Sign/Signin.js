import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
const Signup = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const InfoUser = (e) => {
    setUser(e);
  };

  const InfoPassword = (e) => {
    setPassword(e);
  };

  const CheckNavigation = () => {
    if (user === '123' && password === '123') {
      navigation.navigate('Bottom');
    } else {
      console.log('Please check account or password !');
      <Text>Please check account or password</Text>;
    }
  };

  return (
    <View>
      <Input onChangeText={InfoUser} placeholder="USERNAME" />
      <Input
        onChangeText={InfoPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Text> Please use Username : 123 , Password :123 to login</Text>
      <Button title="Signin" onPress={CheckNavigation} />
      <Text onPress={() => navigation.navigate('Signup')} style={styles.text}>
        No account ? Signup now
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'blue',
  },
});
export default Signup;
