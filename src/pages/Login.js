import React, {useState} from 'react';
import {
        View,
        StyleSheet,
        Image,
        Text,
        TouchableOpacity,
        TextInput,
        KeyboardAvoidingView,
        SafeAreaView,
        ImageBackground

} from 'react-native';
import Constants from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Login ({ navigation }) {
  const user = {
    'email': 'Nathan@email.com',
    'nome': 'nathan',
    'senha': '12345678'
  }

  const [Eye, setEye]        = useState(true)
  const [Olho, setOlho]      = useState('md-eye')
  const [Usuario,setUsuario] = useState('')
  const [Senha,setSenha]     = useState('')

  function visualizacao(){
    if(Eye == true){
        setEye(false)
        setOlho('md-eye-off')
      }
      else{
        setEye(true)
        setOlho('md-eye')
      }
    }

  function navigateToDrawer() {
    if(Usuario == user['email'] | Usuario == user['nome']){
      if(Senha == user['senha']){
        navigation.navigate('TabButton');
      }
      else{
        alert('senha incorreta');
      }
    }
    else{
      alert('Email ou Usuario incorretos');
    }
  }

  function navigateToRegister() {
    navigation.navigate('Register');
  }
  return (
    <SafeAreaView  style = {styles.container}>
        <View style = {styles.container}>
          <KeyboardAvoidingView style = {styles.container}>
            <Image
            style = {styles.logo}
            source = {require('../assets/logo.png')}
            />
            
            <TextInput
                  style = {styles.input}
                  placeholder  = 'Email ou Usuario'
                  autoCorrect  = {false}
                  onChangeText={(text) => setUsuario(text)}
                  />
            
            <View style={styles.lado}>
              <TextInput
                    style = {styles.input2}
                    placeholder  = 'Senha'
                    autoCorrect  = {false}
                    onChangeText={(text) => setSenha(text)}
                    secureTextEntry={Eye}
                    password={true}
                    />
              <TouchableOpacity style={styles.button2} onPress = {visualizacao}>
                <Ionicons style={styles.searchIcon} name={Olho} size={34} color="grey" />
              </TouchableOpacity>
            </View>
            <View style={styles.div}>
              <TouchableOpacity style = {styles.button} title="Login"  onPress={navigateToDrawer}>
                <Text>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.button} title="Registrar" onPress={navigateToRegister}>
                <Text>Cadastre-se</Text>
              </TouchableOpacity>
              <TouchableOpacity  style = {styles.lado}>
                <Text >esqueceu a senha?</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  containerSc: {

    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    width: "100%",
    height: 20,
    paddingBottom:70,
    paddingTop: 50,
    

  },

  text: {
    fontSize: 42,
  },
    container: {
    paddingBottom:70,
    backgroundColor: '#00d0f8',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: '100%',
    paddingTop: 35,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
      padding: 5,
  },
  lado: {
    flex:1,
    flexDirection:'row',
    width:'88%', 
    alignItems:'flex-start',
  },
  div: {
    flex:1,
    marginTop:60,
    width:'100%',
    alignItems: 'center'
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
    width: "88%",
    height: 43,
    padding: 10,
    marginBottom: 15,
    borderRadius:0,
    fontSize:17,
    color: '#222',
  },
  input2: {
    backgroundColor: '#fff',
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    height: 43,
    padding: 10,
    marginBottom: 15,
    borderRadius:0,
    fontSize:17,
    color: '#222',
  },
  button: {
    backgroundColor: '#fff',
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    height: 43,
    borderRadius:17,
  },
  button2:{
    width:'20%',
    height: 43,
    backgroundColor: '#fff',
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 15,
    borderRadius:0,
    fontSize:17,
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
    alignItems: 'center',
    justifyContent: 'center',

  }
});
