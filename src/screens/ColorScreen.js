import React,{useState} from "react";
import {  StyleSheet, View,Button, Text} from 'react-native';

const ColorScreen = () => {
    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);

    return(
       <View>
           <Text>
               Red
           </Text>
            <Button 
            onPress={() => {
                setRed(red + 5);
                if(red > 250){
                    setRed(0);
                }
                console.log(red);
            }} 
            title="More Red"
            />
             <Button 
            onPress={() =>{
                console.log(red);
                setRed(red - 5)
                if(red < 5){
                    setRed(250);
                }
            }} 
            title="Less Red"
            />
              <Text>
               Green
           </Text>
             <Button 
            onPress={() => {
                setGreen(green + 5)
                if(green > 250){
                    setGreen(0);
                }
            }} 
            title="More Green"
            />
             <Button 
            onPress={() => {
                setGreen(green - 5)
                if(green < 5){
                    setGreen(255);
                }
            }} 
            title="Less Green"
            />
              <Text>
               Blue
           </Text>
             <Button 
            onPress={() =>{
                 setBlue(blue + 5)
                if(blue > 250){
                    setBlue(0);
                }
                }} 
            title="More Blue"
            />
             <Button 
            onPress={() =>{
                 setBlue(blue - 5)
                 if(blue < 5){
                    setBlue(255);
                }
                }} 
            title="Less Blue"
            />
        <View
            style={{height:30,backgroundColor:`rgb(${red},${green},${blue})`}}
        />      
        <Text>{`rgb(${red},${green},${blue})`}</Text>
       </View>

    )
}

const styles = StyleSheet.create({
    View: {
        backgroundColor:'blue'
    }
})

export default ColorScreen;