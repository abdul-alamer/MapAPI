import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions,TouchableOpacity ,useState} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
//import Maps from './src/components/Maps'
import * as Location from 'expo-location';



const  GetCurrentLocation = () =>{
return(
    <View><Text>My location !</Text></View>
)


}

export default GetCurrentLocation   