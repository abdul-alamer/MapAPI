import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native';

const MapListScreen = ({navigation}) =>{
    return(
        <SafeAreaView forceInset={{top:'always'}}>
            <View>
                <Text>
                    MapList
                </Text>
            </View>

        </SafeAreaView>
    );

}

export default MapListScreen