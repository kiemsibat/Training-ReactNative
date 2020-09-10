import React,{useState} from "react";
import {  StyleSheet, View,Button} from 'react-native';

const ColorScreen = () => {
    const [color,setColor] = useState('');
    const randomRgb = () => {
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        return `rgb(${red},${green},${blue})`
    }
    return(
       <View>
            <Button onPress={() => setColor(randomRgb())} title="Add a Color"/>
            <View style={{height:100,backgroundColor: color}}/>
       </View>
    )

}



const styles = StyleSheet.create({
})

export default ColorScreen;