import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import MapView from 'react-native-maps'
const Map = () => {
    return <MapView
     style={styles.maps }
     initialRegion={{
         latitude:21.0115037,
         longitude:105.8090587,
         latitudeDelta:0.01,
         longitudeDelta:0.01,
     }}
     />
}

const styles = StyleSheet.create({
    maps:{
        height:500,
    }
})

export default Map;