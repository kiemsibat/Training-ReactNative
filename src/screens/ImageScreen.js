import React from 'react';
import { Text, StyleSheet, View} from 'react-native';
import ImageDetail from '../components/ImageDetail'
const ImageScreen = () =>{
    return(
        <View>
            <ImageDetail title="Forest" score="9" imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetail title="Beach" score="7" imageSource={require('../../assets/mountain.jpg')} />
            <ImageDetail title="Mountain" score="4" imageSource={require('../../assets/forest.jpg')}/>
            {/* <ImageDetail title="Beach"/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    Text:{
        fontSize:30,
    }
})


export default ImageScreen;