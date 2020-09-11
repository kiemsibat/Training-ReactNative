import React from "react";
import { Text, StyleSheet, View,Button} from 'react-native';

const ColorCouter = ({color,onIncrease,onDecrease}) => {
    return(
        <View>
        <Text>
        {color}
        </Text>
        <Button
            onPress={() => onIncrease()}
            title={`More ${color}`}
        />
        <Button
            onPress={() => onDecrease()}
            title={`Less ${color}`}
        />
        {/* <View style={{height:100,backgroundColor:`${color}`}}/>     */}
        </View>
       
    )
}       

const styles = StyleSheet.create({})

export default ColorCouter;