import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.text}>{result.name} </Text>
      <Text>
        {result.rating}* - {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
    }, 
    text:{
        fontWeight: 'bold',
    },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
});

export default ResultsDetail;
