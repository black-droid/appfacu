import React, { useState, useEffect } from 'react';
import {View,
        Image,
        ScrollView,
        StyleSheet,
        Text,
        TouchableOpacity,
        SafeAreaView,
      } from 'react-native';

import { data } from './Dados';
import { i } from './Login';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function CountScreen({ navigation}) {
  const[fotoCuidador, setFotoCuidador] = useState(data[i]['photoCaregiver'])
  const[nomeCuidador, setNomeCuidador] = useState(data[i]['nameCaregiver'])
  const[idadeCuidador, setIdadeCuidador] = useState(data[i]['ageCaregiver'])
  const[cpfCuidador, setCPFCuidador] = useState(data[i]['cpfCaregiver'])
  const[SexoCuidador, setSexoCuidador] = useState(data[i]['sexo'])
  const[foto, setFoto] = useState(data[i]['photo'])
  const[nome, setNome] = useState(data[i]['name'])
  const[idade, setIdade] = useState(data[i]['age'])
  const[cpf, setCPF] = useState(data[i]['cpf'])
  const[sexo, setSexo] = useState(data[i]['sexo'])
  const[telefone, setTelefone] = useState(data[i]['phone'])
  const[celular, setCelular] = useState(data[i]['cellphone'])
  const[email, setEmail] = useState(data[i]['email'])
  const[Pcd, setPcd] = useState(data[i]['disabledPerson'])
  const[deficiencia, setDeficiencia] = useState(data[i]['deficiency'])
  const[plano, setPlano] = useState(data[i]['plan'])
  const[cep, setCEP] = useState(data[i]['cep'])
  const[logradouro, setLogradouro] = useState(data[i]['street'])
  const[numero, setNumero] = useState(data[i]['street'])
  const[bairro, setBairro] = useState(data[i]['neighborhood'])
  const[cidade, setCidade] = useState(data[i]['locality'])
  const[uf, setUF] = useState(data[i]['state'])

  

  useEffect(() =>{navigation.addListener('focus', () => {
    setFotoCuidador(data[i]['photoCaregiver']);
    setNomeCuidador(data[i]['nameCaregiver']);
    setIdadeCuidador(data[i]['ageCaregiver']);    
    setCPFCuidador(data[i]['cpfCaregiver']);
    setSexoCuidador(data[i]['sexoCaregiver']);
    setFoto(data[i]['photo']);
    setNome(data[i]['name']);
    setIdade(data[i]['age']);    
    setCPF(data[i]['cpf']);
    setSexo(data[i]['sexo']);
    setTelefone(data[i]['phone']);
    setCelular(data[i]['cellphone']);
    setEmail(data[i]['email']);
    setPcd(data[i]['disabledPerson']);
    setDeficiencia(data[i]['deficiency']);
    setPlano(data[i]['plan']);
    setCEP(data[i]['cep']);
    setLogradouro(data[i]['street']);
    setNumero(data[i]['number']);
    setBairro(data[i]['neighborhood']);
    setCidade(data[i]['locality']);
    setUF(data[i]['state']);
  })});


  function Editar() {
    if (data[i]['nameCaregiver']===''){
      navigation.navigate('Edit')
    }else if (data[i]['nameCaregiver']!==''){
      navigation.navigate('EditCaregiver')
    }
  }

  return (
    <ScrollView >
      <SafeAreaView style={styles.container}>

      <View style={{flexDirection: "row", alignItems:"center",}}>
      {nomeCuidador==='' ? null :
        <View style={styles.photoPosition}>
          {fotoCuidador==null ? 
          <Icon style={styles.fotoNull} name='account-circle' size={140} color={"#06a"}/>:
          fotoCuidador && <Image source={{ uri: fotoCuidador }} style={styles.fotoPerson} />}
          <View style={styles.titlePosition}>
            <Text style={styles.title}>CUIDADOR</Text>
          </View>
        </View>}

        
        <View style={styles.photoPosition}>
          {foto==null ? 
          <Icon style={styles.fotoNull} name='account-circle' size={140} color={"#06a"}/>:
          foto && <Image source={{ uri: foto }} style={styles.fotoPerson} />}
          
          {nomeCuidador==='' ? null :
          <View style={styles.titlePosition}>
            <Text style={styles.title}>CUIDADO</Text>
          </View>}
        </View>
        </View>

        {nomeCuidador==='' ? null :
        <View style={styles.titlePosition2}>          
            <Text style={styles.title2}>DADOS DO CUIDADOR</Text>
        </View>}

        <View style={styles.contacts}>        
        <Icon name='clipboard-account' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>Nome</Text>
          {nomeCuidador==='' ? 
          <Text style={styles.text2}>{nome}</Text> : 
          <Text style={styles.text2}>{nomeCuidador}</Text>}
        </View>
        </View>

        <View style={styles.contacts}>
        <Icon name='cake-variant' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>Data de Nascimento</Text>
          {idadeCuidador==='' ? 
          <Text style={styles.text2}>{idade}</Text> : 
          <Text style={styles.text2}>{idadeCuidador}</Text>}
        </View>  
        </View>

        <View style={styles.contacts}>
        <Icon name='phone-classic' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>Telefone</Text>
          <Text style={styles.text2}>{telefone}</Text>
        </View>
        </View>

        <View style={styles.contacts}>
        <Icon name='cellphone' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>Celular</Text>
          <Text style={styles.text2}>{celular}</Text>
        </View>
        </View>

        <View style={styles.contacts}>
        <Icon name='credit-card' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>CPF</Text>
          {cpfCuidador==='' ? 
          <Text style={styles.text2}>{cpf}</Text> : 
          <Text style={styles.text2}>{cpfCuidador}</Text>}
        </View>
        </View>

        <View style={styles.contacts}>
        <Icon name='email' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>E-mail</Text>
          <Text style={styles.text2}>{email}</Text>
        </View>
        </View>

        <View style={styles.contacts}>
        <Icon name='human-male-female' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>Sexo</Text>
          {SexoCuidador==='' ? 
          <Text style={styles.text2}>{sexo}</Text> : 
          <Text style={styles.text2}>{SexoCuidador}</Text> }
        </View>
        </View>

        {nomeCuidador==='' ? null :
        <View style={styles.titlePosition2}>          
            <Text style={styles.title2}>DADOS DA PESSOA CUIDADA</Text>
        </View>}

        {nomeCuidador==='' ? null :
        <View style={styles.contacts}>        
        <Icon name='clipboard-account' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>Nome</Text>
          <Text style={styles.text2}>{nome}</Text>
        </View>
        </View>}

        {idadeCuidador==='' ? null :
        <View style={styles.contacts}>
        <Icon name='cake-variant' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>Data de Nascimento</Text>
          <Text style={styles.text2}>{idade}</Text>
        </View>  
        </View>}

        {cpfCuidador==='' ? null :
        <View style={styles.contacts}>
        <Icon name='credit-card' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>CPF</Text>
          <Text style={styles.text2}>{cpf}</Text>
        </View>
        </View>}

        {SexoCuidador==='' ? null :
        <View style={styles.contacts}>
        <Icon name='human-male-female' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>Sexo</Text>
          <Text style={styles.text2}>{sexo}</Text>
        </View>
        </View>}

        <View style={styles.contacts}>
        <Icon name='wheelchair-accessibility' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>Pessoa com Deficiência</Text>
          <Text style={styles.text2}>
            {(Pcd==='Sim') ? (deficiencia) : (Pcd)}</Text>
        </View>
        </View>

        <View style={styles.contacts}>
        <Icon name='hospital' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>Plano de Saúde</Text>
          <Text style={styles.text2}>{plano}</Text>
        </View>
        </View>
        
        <View style={styles.contacts}>
        <Icon name='home-map-marker' size={40} color={"#06a"}/>
        <View style={styles.textPosition}>
          <Text style={styles.text1}>Endereço</Text>
          <Text style={styles.text2}>{logradouro}, Nº {numero}</Text>
          <Text style={styles.text2}>{bairro}</Text>
          <Text style={styles.text2}>{cidade} - {uf}</Text>
          <Text style={styles.text2}>CEP: {cep}</Text>
        </View>

        </View>

        <View style={styles.buttonPosition}>
          <TouchableOpacity 
            style = {styles.button}
            onPress={Editar}>
            <Text style={styles.textButton}>EDITAR</Text>								
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </ScrollView>
    
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6ccff6',
    paddingBottom: 40
  },
  photoPosition: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 60,
    marginBottom: 20,  

	},
  fotoNull: {
    padding: 0.5,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  fotoPerson: {
    height: 145,
    width: 145,
    borderRadius: 100,
    borderColor:"#fff",
    borderWidth: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff"
  },
  titlePosition: {
    alignItems: "center",
    backgroundColor: "#06a",
    padding: 5,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 20,
  },
  title2: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#fff"
	},
	titlePosition2: {
		marginVertical: 10,
		padding: 10,
		borderRadius: 5,
		backgroundColor: "#07a"
	},
  contacts: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10,
    width: "90%",
    borderRadius: 10,
  },
  textPosition: {
    marginLeft: 10,
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
  },
  buttonPosition: {
    marginTop: 40
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 40,
    backgroundColor: '#06a', 
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
})