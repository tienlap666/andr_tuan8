import * as React from 'react';
import {Animated, Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState  } from 'react';
import { Button, Image } from 'react-native';
import icon from '../img/cat.png'
import mouse from './img/mouse.png'


export default function App() {
  const [location, setLocation] 
      = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(10),
        marginTop: new Animated.Value(10)

      });

  const [locationMouse, setLocationMouse] 
      = useState({
        x: null,
        y: null,
        marginLeftM1: new Animated.Value(10),
        marginTopM1: new Animated.Value(10)

      });
  const [locationMouse2, setLocationMouse2] 
      = useState({
        x: null,
        y: null,
        marginLeftM2: new Animated.Value(10),
        marginTopM2: new Animated.Value(10)

      });
    const [locationMouse3, setLocationMouse3] 
      = useState({
        x: null,
        y: null,
        marginLeftM3: new Animated.Value(10),
        marginTopM3: new Animated.Value(10)

      });
    const [count,setCount] = useState(0)
  
    

  function onPress(evt){
      
    var rXM1 = 1+Math.random()*(300-1)
    var rYM1 = 1+Math.random()*(550-1)

    var rXM2 = 1+Math.random()*(300-1)
    var rYM2 = 1+Math.random()*(550-1)

    var rXM3 = 1+Math.random()*(300-1)
    var rYM3 = 1+Math.random()*(550-1)

    console.log('====================================');
    var x = evt.nativeEvent.locationX;
    console.log('===================================');
    console.log(x);
    console.log('====================================');
    var y = evt.nativeEvent.locationY;
    console.log(y)
    console.log('====================================');
    setLocation({
      x: x,
      y: y,
      marginLeft: x -30,
      marginTop: y-30,

    })
    setLocationMouse({
      x: rXM1,
      y: rYM1,
      marginLeftM1: rXM1 -30  ,
      marginTopM1: rYM1 -30,
    })
    setLocationMouse2({
      x: rXM2,
      y: rYM2,
      marginLeftM2: rXM2-30 ,
      marginTopM2: rYM2 -30,
    })
    setLocationMouse3({
      x: rXM3,
      y: rYM3,
      marginLeftM3: rXM3 -30 ,
      marginTopM3: rYM3 -30,
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
  const {marginTopM1, marginLeftM1} = locationMouse;
  const {marginTopM2, marginLeftM2} = locationMouse2;
  const {marginTopM3, marginLeftM3} = locationMouse3;
  

  return (
   <View
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
      style={styles.container}>

      <Text style={{marginLeft:100}}>Show something!</Text>

      <Animated.Image
       source = {mouse}
       style={{marginLeft: marginLeftM1, marginTop: marginTopM1,width:50,height:50,position:'absolute'}}
       ></Animated.Image>
      <Animated.Image
       source = {mouse}
       style={{marginLeft: marginLeftM2, marginTop: marginTopM2,width:50,height:50,position:'absolute'}}
       ></Animated.Image>
      <Animated.Image
       source = {mouse}
       style={{marginLeft: marginLeftM3, marginTop: marginTopM3,width:50,height:50,position:'absolute'}}
       ></Animated.Image>
       <Animated.Image
       source = {icon}
       style={{marginLeft: marginLeft, marginTop: marginTop,width:50,height:50,position:'absolute'}}
       ></Animated.Image>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
 
});
