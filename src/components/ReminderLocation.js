import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Modal, Text, View,Dimensions,TouchableOpacity ,useState,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
//import Maps from './src/components/Maps'
import * as Location from 'expo-location';



export default function ReminderLocation ({modalVisible}){

return(
<View style={styles.InfoBox}>
<Text style={styles.title}>Remind For ? </Text>
<TextInput  style={styles.input} multiline={true}/>
<TouchableOpacity onPress={() =>{} } style={styles.Hide}>
        <Text style={styles.title}>SEND</Text>
        </TouchableOpacity>
</View>
)


}
const styles = StyleSheet.create({
    input:{
        backgroundColor:'white',
        width:200,
        height:100,
        borderRadius:8
     },
     Hide:{
         padding: 10,

     },
    InfoBox:{
        backgroundColor:'lightgray',
         height: 150,
   //      width:500,
        flex:2,
        margin:20,
       // marginRight:50,
        padding:35,
        right:10,
       
        paddingTop:20,
        borderRadius :10,
        justifyContent:'center',
            alignItems:'flex-start'
        
            },
            title:{
                right:10,
                backgroundColor:'#929292',
                borderWidth:0.5,
                borderRadius:50,
                fontWeight:'bold',
                color:'white',
                padding:10,
                paddingTop:15,
               
            },
            text:{
                fontWeight:'normal'

            }
            

})

//export default GetCurrentLocation   