import React, {useState} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {Input} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
const Signup = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const InfoUser = (e) => {
    setUser(e);
  };
  const InfoPassword = (e) => {
    setPassword(e);
  };

  return (
    <View>
      <Input onChangeText={InfoUser} placeholder="USERNAME" />
      <Input
        onChangeText={InfoPassword}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Button
        type="submit"
        title="Signup"
        onPress={() => navigation.navigate('Signin')}
      />
      <Text onPress={() => navigation.navigate('Signin')} style={styles.text}>
        Already have an account? Signin now !
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
