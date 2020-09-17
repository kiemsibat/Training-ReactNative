import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost,state } = useContext(Context);
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
)  
 
  return (
    <View>
      <Text style={styles.label}>Enter fixed title</Text>
      <TextInput
        style={styles.input}
        value={blogPost.title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter fixed content :</Text>
      <TextInput
        style={styles.input}
        value={blogPost.content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        onPress={() => {
          addBlogPost(title, content,() => {
            navigation.navigate("Index");
          });
        
        }}
        title="Add new blog"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    margin: 5,
  },
});

export default EditScreen;
