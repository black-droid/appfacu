import React, {useState} from 'react';
import {View,
        Alert,
        StyleSheet,
        Image,
        Text,
        TouchableOpacity,
        TextInput,
        Keyboard,
        KeyboardAvoidingView,
      } from 'react-native';


import { data } from './Dados';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen ({ navigation, route }) {
//usuario ficticio
  const user = [{
    'email' : ['nathan@email.com', 'douglas@email.com', 'bianca@email.com', 'marcel@email.com','larissa@email.com' ],
    'nome' : ['Nathan', 'Douglas','Bianca', 'Marcel', 'Larissa'],
    'senha' : ['123', '123', '123', '123','123']
  }]



//states de controle e comandos do botao olho para inputs
  const [Eye, setEye]        = useState(true)
  const [Olho, setOlho]      = useState('eye')
//states dos inputs
  const [Usuario,setUsuario] = useState('')
  const [Senha,setSenha]     = useState('')
//funçao de controle do botao olho para input senha
  function visualizacao(){
    if(Eye == true){
        setEye(false)
        setOlho('eye-off')
    }
      else{
        setEye(true)
        setOlho('eye')
      }
  }
//navegaçao com validaçao real com dados ficticios de uma variavel para exemplo
//controle de entrada
//se senha,email, ou nome incorretos ele permanece na mesma page e exibe um alerta
//caso dados corretos ele navega pra pagina de controle q vai indicar a pagina inicial do interior do app
  function NavigateToTab() {
    for (var i=0; i <= data.length; i++) {
      if(Usuario !== data[i]['email'] && Usuario !== data[i]['user']) {
        if (i >= data.length-1){
          Keyboard.dismiss();
          Alert.alert('Usuário ou senha incorreta!');
          break;
        }
      }else{ 
        if(Senha === data[i]['password']){
          navigation.navigate('Tab', { screen: 'Home', params: {'name': data[i]['user'], 'photo': data[i]['photo'] }});
          break;
        }else{
          Keyboard.dismiss();
          Alert.alert(data[i]['name'],'Senha incorreta tente novamente!');
          break;
        }
      }
    }
  }           

  return (

        <View style = {styles.container}>


          <View style={styles.textLogoPosition}>
            <Image style = {styles.logo}
              source = {require('../../assets/logo.png')}/>
            <Text style={styles.textLogo1}>
              Bem-vindo  
            </Text>            
            <Text style={styles.textLogo2}>
              Equality & Care
            </Text>
          </View>

            <TextInput style = {styles.input}
              placeholder  = 'e-mail ou usuário'
              keyboardType='email-address'
              autoCorrect  = {false}
              onChangeText={(text) => setUsuario(text)}/>

            <View style={styles.PositionEye}>
              <TextInput style = {styles.input2}
                placeholder  = 'senha'
                autoCorrect  = {false}
                onChangeText={(text) => setSenha(text)}
                secureTextEntry={Eye}
                password={true}/>
              <Icon style={styles.icon}
                onPress = {visualizacao}
                name={Olho} size={30} color='grey'/>
            </View>    


            <View style={styles.div}>
              <TouchableOpacity style = {styles.button}
                onPress={NavigateToTab}>
                <Text style = {styles.text}>
                  LOGIN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.button}
                onPress={() => navigation.navigate('Register')}>
                <Text style = {styles.text}>
                  CADASTRE-SE
                </Text>
              </TouchableOpacity>
            </View>

        </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ccff6',
    paddingBottom: "15%",
    alignItems: 'center',
    justifyContent: "center",
  },
  logo:{
    marginTop: "20%",
    marginBottom: 10,
    width: 120,
    height:120,
  },
  textLogoPosition: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  PositionEye: {
    flexDirection: 'row',
    alignItems: "baseline"
  },
  div: {
    marginTop: 10,
    width:'100%',
    alignItems: 'center',
    justifyContent: "center",
  },
  input: {
    marginTop: 10,
    backgroundColor: '#fff',
    width: "90%",
    padding: 10,
    fontSize:18,
    color: '#222',
    borderRadius:8,
  },
  input2: {
    marginTop: 10,
    backgroundColor: '#fff',
    width: "90%",
    padding: 10,
    fontSize:18,
    color: '#222',
    borderRadius:8,
  },
  button: {
    backgroundColor: '#06a',
    alignItems: 'center',
    margin: 5,
    justifyContent: 'center',
    width: "90%",
    height: 45,
    borderRadius:8,
  },
  icon:{
    position: "absolute",
    marginLeft: "78%",
    marginTop: 18,     
  },
  textLogo1:{
    fontSize: 14,
    color: '#000'
  },
  textLogo2:{
    fontSize: 20,
    fontWeight: "bold",
    color: '#000'
  },
  text:{
    fontSize: 16,
    fontWeight: "bold",
    color: '#fff'
  },

});
