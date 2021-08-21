import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,} from 'react-native';





export default function FilledButton({title ,onPress,disabled}) {
  return (
    
    <View style={styles.container}>
        <TouchableOpacity style={styles.container_touch} onPress={onPress} disabled={disabled}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
container:{
  position:'absolute', 
  //  top: 100, 

   // alignSelf: 'center',
   top:5,
   marginTop:45,
    right: 5,
    //backgroundColor: 'red'
},
  container_touch: {
  //  position:"absolute",
    backgroundColor: 'lightgray',
    width:250,
    top:5,
     right: 5,
    alignItems: 'center',
    justifyContent:'center',
    padding: 20,
    borderRadius:35,
    

  },
  text:{
      color:'white',
      fontWeight:'500',
      fontSize:16,
  }

});
