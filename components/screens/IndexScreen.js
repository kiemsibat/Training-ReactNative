import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import BlogContext from "../../components/context/BlogContext";
const IndexScreen = () => {
  const users = useContext(BlogContext);
  console.log(users);
  return (
    <View>
      <Text>Hello world baybe </Text>
      <FlatList
        data={users}
        keyExtractor={(user) => user.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
