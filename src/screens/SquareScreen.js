import React,{useState} from "react";
import ColorCouter from '../components/ColorCouter'; 
import { Text, StyleSheet, View,Button} from 'react-native';

const Increment = 5;
const SquareScreen = () => {
    const [red,setRed] = useState(0);
    const [blue,setBlue] = useState(0);
    const [green,setGreen] = useState(0);
    return(
        <View>
            
            {/* Block */}
            <ColorCouter 
            onIncrease={() => {
                setRed(red + Increment)
                if(red > 250){
                    setRed(0);
                }
            }} 
            onDecrease={() => {
                setRed(red - Increment)
                if(red < 5){
                    setRed(255);
                }
            }} 
            color="red"/>
            <ColorCouter 
            onIncrease={() => {
                setBlue(blue + Increment)
                if(blue > 250){
                    setBlue(0);
                }
            }} 
            onDecrease={() => {
                setBlue(blue - Increment)
                if(blue < 5){
                    setBlue(255);
                }
            }} 
            color="blue"/>
            <ColorCouter 
            onIncrease={() => {
                setGreen(green + Increment)
                if(green > 250){
                    setGreen(0);
                }
            }} 
            onDecrease={() => {
                setGreen(green - Increment)
                if(green < 5){
                    setGreen(255);
                }
            }} 
            color="green"/>

            <View style={{height:100,backgroundColor:`rgb(${red},${blue},${green})`}}/>   
            <Text>
                {`rgb(${red},${blue},${green})`}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen;