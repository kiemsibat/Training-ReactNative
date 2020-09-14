import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const SearchBar = ({ term, onTermChange,onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <FontAwesome
        style={styles.iconSearch}
        name="search"
        size={35}
        color="black"
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        style={styles.input}
        placeholder="Search"
        onChangeText={onTermChange}
        onSubmitEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    marginHorizontal: 15,
    borderRadius: 10,
  },
  iconSearch: {
    marginHorizontal: 15,
  },
  input: {
    padding: 10,
    // borderColor:'black',
    // borderWidth:1,
    flex: 1,
  },
});
export default SearchBar;
