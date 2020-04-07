import React from 'react';
import { View, StyleSheet, Image, Text, Button,TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';



export default function Login({ navigation }) {
  function navigateToRegister() {
    navigation.navigate('Register');
  }
  function navigateToHome() {
    navigation.navigate('Home');
  }
  return (
    <View style = {styles.container}>
      <KeyboardAvoidingView style = {styles.background}>
        <Image
        style = {styles.logo}
        source = {require('../assets/logo.png')}
        />
        <Text>Email ou Usuario</Text>
        <TextInput
              style = {styles.input}
              placeholder  = 'Email ou usuario'
              autoCorrect  = {false}
              onChangeText = {() => {}}
              />
        <Text>Senha</Text>
        <TextInput
              style = {styles.input}
              placeholder  = 'Senha'
              autoCorrect  = {false}
              onChangeText = {() => {}}
              />
        <TouchableOpacity style = {styles.button} title="Login" onPress={navigateToHome}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.btnRegister} title="Login" onPress={navigateToRegister}>
        <Text>Registre-se</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    paddingBottom:70,
  },
  logo:{
    width: 106,
    height:100,

  },
  indication: {
    color: '#fff',
    fontSize:15,
    marginTop:10,

  },
  input: {
    backgroundColor: '#fff',
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    height: 43,
    padding: 10,
    marginBottom: 15,
    borderRadius:7,
    fontSize:17,
    color: '#222',
  },
  button: {
    backgroundColor: '#fff',
    marginTop:2,
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    height: 43,
    borderRadius:17,
  },
  bigfont:{
    fontSize:20,
  },
  btnRegister: {
    marginRight:150,
  },
  submit:{
    fontSize:15,
    color: '#fff',
  },
  btnPasword:{
    marginTop: 10,
    marginRight:140,
  },
  background: {
    flex: 1,
    backgroundColor: '#6dcff6',
    alignItems: 'center',
    justifyContent: 'center',

  }
});
