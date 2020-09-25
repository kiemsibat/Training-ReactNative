import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const App = () => {
  return(
    <>
      <View style={styles.wrapper}> 
      <Text style={styles.container}>Hello world</Text>
      <Text style={styles.container}>Hello world</Text>
      <Text style={styles.container}>Hello world</Text>
      <Text style={styles.container}>Hello world</Text>
      <Text style={styles.container}>Hello world</Text>
      <Text style={styles.container}>Hello world</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    fontSize:30,
    fontWeight:'bold',
    color:'red'
  },
  wrapper:{
    backgroundColor:'yellow',
  }
})
export default App;