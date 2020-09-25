import React, {useEffect, useState} from 'react';
import {Text,FlatList,Button,TouchableOpacity} from 'react-native';
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
      console.log(id);
  }
  return (
    <>


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

export default AlbumsList;
