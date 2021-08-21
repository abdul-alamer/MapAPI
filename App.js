import { StatusBar } from 'expo-status-bar';
import Notification from './src/components/Notification';
import React from 'react';
import { StyleSheet,Modal, Text, View,Dimensions,TouchableOpacity ,useState,useEffect,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Maps from './src/components/Maps'
import ModalLocation from './src/components/LocationModal'
import {FontAwesome5,AntDesign} from '@expo/vector-icons';
import Approximate from './Logic/Approximate';
import MapView, { Callout, Marker } from 'react-native-maps';
import FilledButton from './src/components/FilledButon';
import ReminderLocation from './src/components/ReminderLocation';
import * as Location from 'expo-location';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  MapList,
  Mapscreen
  }
  from './src/screens/Screens'
import { Fragment } from 'react';
  const Drawer = createDrawerNavigator();



  export default function App() {
    const [modalVisible, setModalVisible] = React.useState(false);

    const [pin,setPin] = React.useState({
            latitude:37.78825,
            longitude:-122.4324
    });
    const [location, setLocation] = React.useState(null); // for initial current location 
    const [errorMsg, setErrorMsg] = React.useState(null);
    const [enable,setEnable] = React.useState(true);//modal

    React.useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let newLocation = await Location.getCurrentPositionAsync({});
        setLocation(newLocation);
        
        
        
       
      })();
    }, []);

    function checkLocation(){
   
    if (errorMsg != null) {
     var defualt = {
      latitude:37.78825,
      longitude:-122.4324
     }
      return defualt
    } else if (location !=null) {
     return location.coords // JSON "coords": "latitude":(number),"longitude":(number)
    }
    else if (location == null){
      var defualt = {
        latitude:37.78825,
        longitude:-122.4324
       }
        return defualt
    }
  }
  var mylocationPin = checkLocation() 
    return (
      <View style={styles.container}>
     <Modal
    animationType="fade"
    visible ={modalVisible}
    onRequestClose={() => {setModalVisible(!modalVisible);}}
    
    >
    <View style={styles.ModalView}>
   
<ReminderLocation />

<TouchableOpacity onPress={() =>{setModalVisible(!modalVisible);console.log(modalVisible)}} style={styles.Hide}>
<Text>{Approximate(32.3586307,32.3586572)}</Text>
        <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>

<Notification  coords={mylocationPin}/>{/**notification component */}
    
 
  
    
    </View>
    </Modal>
        <MapView style={styles.map} initialRegion={{
          latitude:mylocationPin.latitude,
          longitude:mylocationPin.longitude,
          latitudeDelta:1.0922,
          longitudeDelta:1.0421,
        }} >
       
          <Marker
          coordinate= {mylocationPin}//{pin}
          draggable={true}
         /* onPress = {(e)=>
            <ModalLocation/>
          }*/
          onDragStart={(e)=>{
            console.log("Drag start",e.nativeEvent.coordinate)

          }}
          onDragEnd={(e)=>{
            setPin({
              latitude:e.nativeEvent.coordinate.latitude,
              longitude:e.nativeEvent.coordinate.longitude

            })
            setEnable(false)
          }}
          >
            <Callout><Text>my location</Text></Callout>
         
          </Marker>
        
        
        </MapView>
       <FilledButton title="add reminder"  onPress={()=>{setModalVisible(true);}} disabled={enable}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({

    input:{
      backgroundColor:'lightgray',
      width:300,
      padding:20,
      borderRadius:8
   },
   cancel:{
    backgroundColor:'#929292',
    borderWidth:0.5,
    borderRadius:10,
    width:100,
    paddingTop:10,
    paddingVertical:5,
    paddingLeft:20,
    //padding:5
  


   },
  
   ModalView:{
  //  backgroundColor:'#FAFAFA',
    position:"absolute",
    borderRadius :10,
    justifyContent: 'center',
    flex: 1,
    top:5,
    right:50,
  margin:50,
 
    alignItems:'center',
  
        },
    container: {
      flex: 1,
     justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    box: {
      position:'absolute', 
    //  top: 100, 
      width: 200, 
      height: 50 , 
     // alignSelf: 'center',
     top:5,
     marginTop:45,
      right: 5,
      backgroundColor: 'red'
    }

  });
  /**                            <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="map" component={Mapscreen}/>
      <Drawer.Screen name ="mapList" component={MapList}/>


    </Drawer.Navigator>
    </NavigationContainer> */
  