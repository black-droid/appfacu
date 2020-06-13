import React, { useState, useEffect } from 'react';
import { View, Button, Alert, Text, TextInput, SafeAreaView } from 'react-native';


export default function AlarmScreen () {
 function Botao(){
    
  Alert.alert ('Alert Title', 'Alert message here ...', [ 
    {text: 'NÃo', onPress: () => console.warn ('NO Pressed '), style:' cancel '}, 
    {text:' SIM', onPress: () => console.warn (' YES Pressed ')}, 
  ])} 
 
  return(

    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

        <Text> Em desenvolvimento </Text>
    <Button
    title = 'Press'
    onPress={Botao}
    />
  


        

       
 
    </SafeAreaView>
  )
};


