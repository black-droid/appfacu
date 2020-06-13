import React, { useState, useEffect } from 'react';
import {Text,
        StyleSheet,
        View,
        Image,
        SafeAreaView,
        ScrollView,
      } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { data } from './Dados';
import { i }  from './Login'




function idade (ano_aniversario, mes_aniversario, dia_aniversario) {
  var d = new Date(),
      ano_atual = d.getFullYear(),
      mes_atual = d.getMonth() + 1,
      dia_atual = d.getDate(),
      ano_aniversario = +ano_aniversario,
      mes_aniversario = +mes_aniversario,
      dia_aniversario = +dia_aniversario,
      quantos_anos = ano_atual - ano_aniversario;
  if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
      quantos_anos--;
  }
  return quantos_anos < 0 ? 0 : quantos_anos;
}




export default function HomeScreen({ navigation}) {
  const[foto, setFoto] = useState(data[i]['photo'])
  const[nome, setNome] = useState(data[i]['name'])
  const[niver, setNiver] = useState(idade(data[i]['age'].split('/').splice(2,2), 
                                          data[i]['age'].split('/').splice(1,1), 
                                          data[i]['age'].split('/').splice(0,1)))
  const[sexo, setSexo] = useState(data[i]['sexo'])  
  const[cpf, setCPF] = useState(data[i]['cpf'])

  

  useEffect(() =>{navigation.addListener('focus', () => {
    setFoto(data[i]['photo']);
    setNome(data[i]['name']);
    setNiver(idade( data[i]['age'].split('/').splice(2,2), 
                    data[i]['age'].split('/').splice(1,1), 
                    data[i]['age'].split('/').splice(0,1)));
    setSexo(data[i]['sexo']);
    setCPF(data[i]['cpf']);
    
  })});
    
    

 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView> 
      <View style={styles.title}>
      <View style={styles.title2}>
      <View style={styles.namePosition}>
        {(foto===null) ? 
          (<Icon style={styles.fotoNull} name='account-circle' size={120} color={"#06a"}/>):
          (foto && <Image source={{ uri: foto }} style={styles.fotoPerson}/>)}
        <View>
          <Text style={styles.nameText}>{(nome.length>= 23) ? (nome.slice(0,22)+'...'):(nome)}</Text>          
          <Text style={styles.nameText2}>{niver} anos</Text>
          <Text style={styles.nameText2}>{sexo}</Text>
          <Text style={styles.nameText2}>CPF: {cpf}</Text>
        </View>
      </View>
      </View>
      </View>
      <View style={styles.icon1}>
        <View style={styles.alignIconText}>
          <Icon style={styles.icon}
            onPress={() => navigation.navigate('Schedule')}
            name='calendar-clock' size={100} color={"#07a"}/>
          <Text style={styles.textIcon}>
            Agendar
            </Text>
          <Text style={styles.textIcon}>
            Consultas
            </Text>
        </View>
        <View style={styles.alignIconText}>
          <Icon style={styles.icon}
            onPress={() => navigation.navigate('Historic')}
            name='clipboard-text-outline' size={100} color={"#07a"}/>
          <Text style={styles.textIcon}>
            Histórico de
          </Text>
          <Text style={styles.textIcon}>
            Consultas
          </Text>
        </View>
      </View>
      <View style={styles.icon2}>
        <View style={styles.alignIconText}>
          <Icon style={styles.icon}
            onPress={() => navigation.navigate('QRCode')}
            name='qrcode' size={100} color={"#07a"}/>
          <Text style={styles.textIcon}>
            Chegada
          </Text>
          <Text style={styles.textIcon}>
          </Text>
        </View>
        <View style={styles.alignIconText}>
          <Icon style={styles.icon}
            onPress={() => navigation.navigate('Transport')}
            name='ambulance' size={100} color={"#07a"}/>
          <Text style={styles.textIcon}>
            Transporte
          </Text>
          <Text style={styles.textIcon}>
          </Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#6ccff6',
  },
  fotoNull: {
    marginTop: 20,
    marginLeft: 10,
    padding: 0.5,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  fotoPerson: {
    marginTop: 20,
    marginLeft: 10,
    height: 120,
    width: 120,
    borderRadius: 100,
    borderColor:"#fff",
    borderWidth: 5,
  },
  title: {
    margin: 5,
    marginTop: 40,
    height: 160,
    backgroundColor: '#07a',
    
    borderRadius: 20, 
  },
  namePosition: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  nameText: {
    marginTop: 25,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",

  },
  nameText2: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
  },
  alignIconText: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#07a",
    marginTop: 20,
  },
  icon1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  icon2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

  },
  textIcon: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#07a"
  },

})


