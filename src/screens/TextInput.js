import React,{useState} from "react";
import { Text, StyleSheet, View,TextInput} from "react-native";

const Input = () => {
    const [name,setName] = useState('');
    return(
        <View>
             <Text>Enter Name :</Text>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
            />
            <Text>{name.length < 4 ? <Text>Name must be 4 character </Text> : ""}</Text>

            <Text>My Name is : {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
})
export default Input