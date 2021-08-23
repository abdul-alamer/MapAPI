import React from "react";
import { View, Text } from "react-native";
import MapView , { PROVIDER_GOOGLE,Marker  } from "react-native-maps";
import  {mapStyle}  from "../constants/mapStyle";
import Geolocation from "react-native-geolocation-service";
import * as Location from 'expo-location';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            latitude: 0,
            longitude: 0,
            coordinates: [],
         };
       }
       componentDidMount(){
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
      
            let location = await Location.getCurrentPositionAsync({});
            this.setState({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                coordinates: this.state.coordinates.concat({
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude
                 } )
              });
          console.log(this.state.coordinate.latitude)
            
            
            
           
          })
        
       }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
         provider={PROVIDER_GOOGLE}
         customMapStyle={mapStyle}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>
              <Marker
        coordinate={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
        }}>
    </Marker>
          </MapView>
      </View>
    );
  }
}