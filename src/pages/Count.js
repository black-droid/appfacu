import React, { useState, useEffect } from 'react';
import {Button,  
        View,
        Image,
        Alert,
        AsyncStorage,
        StyleSheet,
        Text,
      } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons'




export default function CountScreen({ navigation, route }) { 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Button 
        title="Editar" 
        onPress={() => navigation.navigate('Register')} />
    </View>
  );
}


const styles = StyleSheet.create({
  fotoNull: {
    marginTop: 40,
    marginLeft: 20,
    padding: 0.5,
    borderRadius: 100,
    backgroundColor: '#ddd',
  },
  fotoPerson: {
    marginTop: 40,
    marginLeft: 20,
    height: 120,
    width: 120,
    borderRadius: 100,
    borderColor:"#ddd",
    borderWidth: 5,
  },
})