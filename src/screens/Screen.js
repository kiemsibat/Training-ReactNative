import React from 'react';
import {Text,StyleSheet,View} from 'react-native'


const Screen = () => {
    return(
        <Text style={styles.Text}>Hello Screen</Text>
    )
}

const styles = StyleSheet.create({
    Text :{
        fontSize : 50,
        color: 'yellow'
    }
})
export default Screen;