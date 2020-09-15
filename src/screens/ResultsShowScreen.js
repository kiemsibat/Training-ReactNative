import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image,FlatList } from "react-native";
import yelp from "../api/yelp";
const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState("");
  const id = navigation.getParam("id");
  // console.log(id);
  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResults(id);
 
  }, []);
  console.log(result);
  if(!result){
      return null;
  }
  return (
    <>

      <>
             <Text style={styles.text}>{result.name}</Text>
             <FlatList
                // horizontal
                data={result.photos}
                keyExtractor={(photos) => photos}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri: item}}/>
                }}
             />
      </>
    </>
  );
};

const styles = StyleSheet.create({
    image:{
        width:400,
        height:300,
        marginBottom:20
    },
    text:{
        fontSize:30,
        fontWeight: 'bold',
    }
})

export default ResultsShowScreen;
