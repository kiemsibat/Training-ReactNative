import React, {useContext} from 'react'
import {Text,View, StyleSheet,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext'
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons'; 
const ShowScreen = ({navigation}) =>{
    // console.log(navigation.getParam('id'));
    const { state} = useContext(Context);
    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    )
    return<View >
         <Text style={styles.header}>{blogPost.title} </Text>
        <Text style={styles.content}>{blogPost.content} </Text>
    </View>
}
ShowScreen.navigationOptions = ({navigation}) => {
    return {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:navigation.getParam('id')})}>
          <EvilIcons name="pencil" size={30} color="black" />
        </TouchableOpacity>
      ),
    };
  };

const styles = StyleSheet.create({
    header:{
        fontWeight:'bold',
        fontSize:30
    },
    content:{
        fontSize:25
    }
})

export default ShowScreen;