import React,{ useState} from 'react';
import {StyleSheet,View} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from "../../src/components/Spacer";
import {Context as AuthContext} from "../context/AuthContext"
const AuthForm = ({headerText,errorMessage,onSubmit,submitButtonText}) => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    // const {state,signup} = useContext(AuthContext);

    return(
        <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={(email) => {
            setEmail(email)
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
        {errorMessage ? <Text style={styles.error}>{errorMessage} !</Text> : null}
      </Spacer>
      <Spacer>
      <Button title={submitButtonText} onPress={() => onSubmit({email,password})} />
      </Spacer>
    </>
    )
}

const styles = StyleSheet.create({
    error:{
        color:'red',
        marginLeft:15,
        marginTop:15
    }
});

export default AuthForm;