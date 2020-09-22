import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if(i%2 ==0){
        points.push({
            latitude: 21.0115037 + i * 0.001,
            longitude: 105.8090587 + i * 0.001,
          });
    }else{
        points.push({
            latitude: 21.0115037 - i * 0.001,
            longitude: 105.8090587 + i * 0.001,
          });
    }
  }
  return (
    <MapView
      style={styles.maps}
      initialRegion={{
        latitude: 21.0115037,
        longitude: 105.8090587,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  maps: {
    height: 500,
  },
});

export default Map;
