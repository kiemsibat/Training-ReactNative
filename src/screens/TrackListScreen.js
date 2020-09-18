import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const TrackListScreen = ({navigation}) => {
    return(
        <View><Text style={styles.text}>TrackListScreen</Text>
        <Button title="Go to Track Detail"
                onPress={() => navigation.navigate('TrackDetail')}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:48
    }
})

export default TrackListScreen