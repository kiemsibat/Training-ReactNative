import React from "react";
import { Text, StyleSheet, View,} from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.Box}>
            <Text style={styles.Text}>BoxScreen</Text>
            <Text style={styles.Text}>BoxScreen1</Text>
            <Text style={styles.Text}>BoxScreen2</Text>
            
        </View>
    )
}


const styles = StyleSheet.create({
    Box: {
      
        borderWidth:1,
        borderColor:'yellow',
        // alignItems: 'center'
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Text:{
        borderColor:'red',
        borderWidth:1,
        marginVertical:10,
        color:'white',
        fontSize:20,
        backgroundColor:'blue',
     
        textAlign: 'center'
    }
})

export default BoxScreen