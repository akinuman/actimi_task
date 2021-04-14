import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native';
import BackGround from "./assets/background.jpeg";
import Logo from "./assets/logo.jpeg"

const ScreenHeight = Dimensions.get("screen").height
const ScreenWidth = Dimensions.get("screen").width
const screen_ratio = ScreenHeight / ScreenWidth


export default function App() {
  const [color, setColor] = useState({
    redColor: "red",
    yellowColor: "yellow",
    blueColor: "blue"
  })
  const refOne = useRef()
  const refTwo = useRef()
  const refThree = useRef()


  const [textHere, setTextHere] = useState({
    login: "LOGIN",
    register: "REGISTER"
  })
  const [status, setStatus] =  useState(true)

 const changeColor = (str) => {
  if(str === 1 ) {
    setColor({...color, redColor: color.blueColor, blueColor: color.redColor})
  }
  if(str === 2) {
    setColor({...color, yellowColor: color.blueColor, blueColor: color.yellowColor})
  }
  if(str === 3) {
    setColor({
      redColor: "red",
      yellowColor: "yellow",
      blueColor: "blue"
    })
  }
 }





  return (
    <View style={styles.container}>
      <ImageBackground source={BackGround} style={{height: ScreenHeight, width: ScreenWidth}}>
        <View style={styles.main}>
          <View style={styles.partOne}>
            <View>
            <Image source={Logo} style={{height: 100, width: 100}}></Image>
            </View>
            <View style={styles.textView}>
              <Text styles={{fontSize: 25}}>Sell what you don't need</Text>
            </View>
          </View>
          <View style={styles.buttonPart}>
            <TouchableOpacity onPress={() => changeColor(1)}>
            <View ref={refOne} style={[styles.button , {backgroundColor: color.redColor}]}>
              <View style={[styles.buttonView]}>
                <Text style={styles.textLogin}>
                  {status ? textHere.login : textHere.register}
                </Text>
              </View>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => changeColor(2)}>
            <View ref={refTwo} style={[styles.button,{marginTop: 25}, {backgroundColor: color.yellowColor}]}>
              <View style={[styles.buttonView]}>
                <Text style={styles.textLogin}>
                  {!status ? textHere.login : textHere.register}
                </Text>
              </View>
            </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => changeColor(3)}>
            <View refThree={refThree} style={[styles.button, {marginTop: 25}, {backgroundColor: color.blueColor}]}>
            </View>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: ScreenHeight,
    width: ScreenWidth,
    backgroundColor: "red"   
  },
  main: {
    alignItems: "center",
    justifyContent: "space-between",
    height: ScreenHeight * 0.95
  },  
  partOne: {
    alignItems: "center",
    marginTop: screen_ratio * 25
  },
  textMe: {
    fontSize: 25,
    color: "red"
  },
  textView: {
    marginTop: screen_ratio * 10
  },
  button: {
    width: ScreenWidth * 0.8,
    height: ScreenHeight * 0.08,
    borderRadius: screen_ratio * 15
  },
  textLogin: {
    color: "white",
    fontSize: 20,
  },
  buttonView: {
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonPart: {
    marginBottom: ScreenHeight * 0.3
  }
});
