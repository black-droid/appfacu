import React, {useState} from 'react';
import {View,
        Alert,
        StyleSheet,
        Image,
        Text,
        TouchableOpacity,
        TextInput,
        KeyboardAvoidingView,
        SafeAreaView,

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function LoginScreen ({ navigation }) {
//usuario ficticio
  const user = {
    'email' : ['nathan@email.com', 'douglas@email.com', 'bianca@email.com', 'marcel@email.com','larissa@email.com' ],
    'nome' : ['Nathan', 'Douglas','Bianca', 'Marcel', 'Larissa'],
    'senha' : ['123', '123', '123', '123','123']
  }

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
  function navigateToTab() {
    for ( i=0; i <= user['nome'].length; i++) {
      if(Usuario == user['email'][i] | Usuario == user['nome'][i]) {        
        if(Senha == user['senha'][i]) {
          navigation.navigate('Tab', { screen: 'Home', params: { 'name': user['nome'][i]}})
          break;
        }
        else {
          Alert.alert('Senha incorreta','Tente novamente!')
          break;
        }
      }
    }
    if (i >= user['nome'].length) {
      Alert.alert('Usuário ou senha incorreta!')
    }     
  } 
  return (
    <SafeAreaView  style = {styles.container}>
        <View style = {styles.container}>
          <KeyboardAvoidingView behavior='padding'
            style = {styles.container}>

          <View style={styles.textLogoPosition}>
            <Image style = {styles.logo}
              source = {require('../../assets/logo.png')}/>
            <Text style={styles.textLogo1}>
              Bem-vindo a
            </Text>            
            <Text style={styles.textLogo2}>
              Equality & Care
            </Text>
          </View>

            <TextInput style = {styles.input}
              placeholder  = 'e-mail ou usuário'
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
                title="Login"
                onPress={navigateToTab}>
                <Text style = {styles.text}>
                  LOGIN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.button}
                title="Registrar"
                onPress={() => navigation.navigate('Register')}>
                <Text style = {styles.text}>
                  CADASTRE-SE
                </Text>
              </TouchableOpacity>
            </View>

          </KeyboardAvoidingView>
        </View>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ccff6',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: '100%',
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
    flex: 1,
    marginTop: 10,
    width:'100%',
    alignItems: 'center',
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
