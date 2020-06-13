import React, { useState }  from 'react';
import { View, Picker, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function UserOrCaregiverScreen ({ navigation }) {
  const[cuidador, setCuidador] = useState('')



  function Cadastro () {
    if (cuidador==='CUIDADOR' ){
      navigation.navigate('Caregiver')
    }else if (cuidador==='USUÁRIO'){
      navigation.navigate('Register')
    }
  }

  return(

    <SafeAreaView style={styles.container}>



        
        
        <View style={styles.termo}>
        <Text style={styles.text}>TERMO DE RESPONSABILIDADE</Text>
        <Text></Text>
        <Text style={styles.text}>Ao selecionar a opção de cuidador, você informa que será responsável
        pela utilização do aplicativo, confirma que está apto a exercer a atividade de cuidador
        e se resposábiliza pela veracidade dos dados preenchidos no cadastro. </Text>
        </View>



        <Text style={styles.text}>VOCÊ É CUIDADOR OU USUÁRIO?</Text>
						<Picker            
              style={styles.picker}
              itemStyle={{width: 400,}}              
							selectedValue = {cuidador} 
							onValueChange = {(itemValue) => setCuidador( itemValue)}>
              <Picker.Item label="SELECIONE" value="SELECIONE" />
							<Picker.Item label="CUIDADOR" value="CUIDADOR" />
							<Picker.Item label="USUÁRIO" value="USUÁRIO" />
						</Picker>
                        
            <TouchableOpacity style = {styles.button}
                onPress={Cadastro}>
                <Text style = {styles.textButton}>
                  AVANÇAR
                </Text>
              </TouchableOpacity>          
                 
 
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: '#6ccff6',    
  },
  termo: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  text:{
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "justify",
    padding: 10    
  },
  picker: {
    height: 50,
    width: "90%",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: '#06a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    paddingHorizontal: 80,
    paddingVertical: 15,
    marginTop: 80,
  },
  textButton:{
    fontSize: 16,
    fontWeight: "bold",
    color: '#fff'
  },
});