import React from 'react';
import { Text, StyleSheet, View,FlatList } from 'react-native';

const ListScreen = () =>{

    const Friends = [
        {name:'Friend1',age:20},
        {name:'Friend2',age:45},
        {name:'Friend3',age:32},
        {name:'Friend4',age:27},
        {name:'Friend5',age:53},
        {name:'Friend6',age:30},
   
    ]

    return(
        <View>
            <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
                data={Friends}
                renderItem={({item}) => {
                return <Text style={styles.Text}>{item.name} - Age {item.age}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Text:{
        // fontSize:30,
        marginVertical:50
    }
})
export default ListScreen;