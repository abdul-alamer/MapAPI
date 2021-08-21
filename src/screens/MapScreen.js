import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native';
import Map from '../components/Maps'

const MapScreen = ({navigation}) =>{
    return(
        <SafeAreaView forceInset={{top:'always'}}>
         <Map/>
        </SafeAreaView>
    );

}
const Styles = StyleSheet.create({
    constainer:{
        flex: 1,
        padding: 5,
    }

})
export default MapScreen