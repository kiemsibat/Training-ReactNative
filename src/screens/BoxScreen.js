import React from "react";
import { Text, StyleSheet, View,} from 'react-native';

const BoxScreen = () => {
    return(
       <>
         <View style={styles.Box}>
            <View style={styles.Text1}/>
            <View style={styles.Text2}/>
            <View style={styles.Text3}>
       
       </View>        
        </View>
       
       </>
        
    )
}

const styles = StyleSheet.create({
    Box: {
        borderWidth:1,
        height:300,
        // borderColor:'yellow',
        // alignItems: 'center'
        flexDirection:'row',
        justifyContent:'space-between',
    },
    
    Text1:{
       
        height:50,
        width:50,
        // flex:1,
        borderWidth:1,
        marginVertical:10,
        color:'white',
        fontSize:20,
        backgroundColor:'blue',
        textAlign: 'center',
        borderColor:'red'
    },
    Text2:{
        borderColor:'red',
        height:50,
        width:50,
        // flex:2,
        borderWidth:1,
        marginVertical:10,
        color:'white',
        fontSize:20,
        backgroundColor:'yellow',
        textAlign: 'center',
        borderColor:'red',
        top:50,
     
    },
    Text3:{
        borderColor:'red',
        height:50,
        width:50,
        borderColor:'red',
        // flex:1,
      
        borderWidth:1,
        marginVertical:10,
        color:'white',
        fontSize:20,
        backgroundColor:'red',
        justifyContent:'space-between',

    },
  
})

export default BoxScreen