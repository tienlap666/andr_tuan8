import * as React from 'react';
import {Animated, Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState  } from 'react';
import { Button, Image } from 'react-native';
import icon from '../img/cat.png'



export default function App() {
  const [location, setLocation] 
      = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(10),
        marginTop: new Animated.Value(10)
      });

  
    

  function onPress(evt){
      
    

    console.log('====================================');
    var x = evt.nativeEvent.locationX;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    var y = evt.nativeEvent.locationY;
    console.log(y)
    console.log('====================================');
    setLocation({
      x: x,
      y: y,
      marginLeft: x -60 ,
      marginTop: y -60,

    })
    
  }
  function onMove(evt){
    
    
    
    console.log('====================================');
    console.log(location);
    console.log('====================================');
    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease(){
    console.log("Realse!");
  }
  const {marginTop, marginLeft} = location;
  return (
   <View
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
      style={styles.container}>

      <Text>Show something!</Text>
     
      <Animated.Image
       source = {icon}
       style={{marginLeft: marginLeft, marginTop: marginTop,width:100,height:100}}
       >

      </Animated.Image>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
 
});
