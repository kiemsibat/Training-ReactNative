import React,{useState} from "react";
import {  StyleSheet, View,Button, FlatList} from 'react-native';

const ColorScreen = () => {
    const [color,setColor] = useState([]);
    const randomRgb = () => {
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        return `rgb(${red},${green},${blue})`
    }
    return(
       <View>
            <Button 
            onPress={() => setColor([...color,randomRgb()])} 
            title="Add a Color"
            />
          
            <FlatList
                keyExtractor={(item) => item}
                data={color}
                renderItem={({ item}) =>  {
                    return   <View style={{height:100,backgroundColor: item}}/>
                }}
            />
       </View>
    )

}

const styles = StyleSheet.create({
})

export default ColorScreen;