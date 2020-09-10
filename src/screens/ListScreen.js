import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ListScreen = () =>{
    return(
        <View>
            <Text style={styles.Text}>Hello ListScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Text : {
        fontSize : 30,
    }
})

export default ListScreen;