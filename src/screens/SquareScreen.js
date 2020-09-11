import React, { useState, useReducer } from "react";
import ColorCouter from "../components/ColorCouter";
import { Text, StyleSheet, View, Button } from "react-native";

const Increment = 5;
const reducer = (state,action) => {
    switch (action.colorToChange) {
        case 'red':
            if(state.red + action.amount > 255 || state.red + action.amount < 0 )
            return {...state,red:state.red + action.amount}
        case 'green':
            return {...state,green:state.green + action.amount}
        case 'blue':     
            return {...state,blue:state.blue + action.amount}
        default:
            return state;
    }
};
const SquareScreen = () => {
    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0})
    const {red,blue,green} = state;
  
    console.log(state);
  return (
    <View>
      {/* Block */}
      <ColorCouter onIncrease={() => dispatch({colorToChange:'red',amount:Increment})} onDecrease={() => dispatch({colorToChange:'red',amount:-1*Increment})} color="red" />
      <ColorCouter onIncrease={() => dispatch({colorToChange:'blue',amount:Increment})} onDecrease={() => dispatch({colorToChange:'blue',amount:-1*Increment})} color="blue" />
      <ColorCouter onIncrease={() => dispatch({colorToChange:'green',amount:Increment})} onDecrease={() => dispatch({colorToChange:'green',amount:-1*Increment})} color="green" />

      <View
        style={{ height: 100, backgroundColor: `rgb(${red},${blue},${green})` }}
      />
      <Text>{`rgb(${state.red},${state.blue},${state.green})`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
