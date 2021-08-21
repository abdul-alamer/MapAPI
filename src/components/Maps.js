import { StyleSheet, Text, View,Dimensions,TextInput } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const Map = ()=>{
    return(
        <View Style={styles.container}>
    <MapView Style= {styles.map}
        loadingEnabled={true}
        region ={{latitude :37.78825, longitude:-122.4324,latitudeDelta:0.015,longitudeDelta:0.0121}}
    >

    </MapView>
    </View>
    )

    } 
    const styles = StyleSheet.create({
        
map :{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,


},
container:{
    flex:1
}
    });

export default Map;