import React,{useContext} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { Context as AuthContext } from "../context/AuthContext";
// components
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
const SigninScreen = () => {
    const { state, signin } = useContext(AuthContext);
    return(
        <View style={styles.container}>
         
            <AuthForm
                headerText="Signin Screen"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Signin"
            />
            <NavLink
                   text="No account ? Signup"
                   routeName="Signup"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        flex:1
    },
    text:{
        fontSize:48
    }
})

SigninScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };
export default SigninScreen