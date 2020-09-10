import React from 'react';
import {Text,StyleSheet,View} from 'react-native'


const Screen = () => {
    const love = "<3"
    return(
        <Text style={styles.Text}>Hello Screen {love} </Text>
    )
}

const styles = StyleSheet.create({
    Text :{
        fontSize : 50,
        color: 'red'
    }
})
export default Screen;