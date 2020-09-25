import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const App = () => {
  return(
    <>
      <View style={styles.wrapper}> 
      <Text style={styles.container}>Hello world</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
  },
  wrapper:{
    backgroundColor:'#F8F8F8',
    justifyContent:'center',
    alignItems: 'center',
    shadowColor:'#000'
  }
})
export default App;