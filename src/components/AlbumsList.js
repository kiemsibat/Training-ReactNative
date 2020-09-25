import React, {useEffect, useState} from 'react';
import {Text,FlatList,Button,Image,StyleSheet} from 'react-native';
import axios from 'axios';
const AlbumsList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => setList(response.data))
      .catch((error) => console.log(error));
  }, []);
  const onHandleClick = (id) => {
      alert(`OK : ${id}`)
  }
  return (
    <>
      <Image style={styles.Image} source={{uri:'https://i-dulich.vnecdn.net/2019/11/22/2-1574406624_680x0.jpg'}}/>
      <FlatList 
        data={list}
        // keyExtractor={list => list.id}
        renderItem ={({item}) => {
        return <Text  key={item.id}> {item.id} -{item.title}    <Button onPress={() =>onHandleClick(item.id)} title="clickme"/></Text>
        }}
      />

    </>
  );
};

const styles = StyleSheet.create({
  Image:{
    height:300,
  }
})

export default AlbumsList;
