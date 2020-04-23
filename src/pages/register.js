import React from 'react';
import { Button, 
        StyleSheet, 
        Text, 
        TextInput, 
        View, 
        Picker,        
        SafeAreaView,
        ScrollView,
        KeyboardAvoidingView,
       } from 'react-native';

import useForm from 'hook-form';
import Constants from 'expo-constants';


export default class App extends React.Component {

	state = {
		cep: '',
		telefone:'',
		data: {},
        nome: '',
        idade: '',
        sexoSelecionado: 0,
        sexos: [
            {key: 1, sexo: 'Masculino'},
            {key: 2, sexo: 'Feminino'}
      ],
        cpf: '',
        email:'',
	};

	buscar = async () => {
		let data = await fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`);
		data = await data.json();

		this.setState({ data });

	};

	render() {
            let sexoSelected = this.state.sexos.map((v,k) => {
      return <Picker.Item key={k} value={k} label={v.sexo}/>
    });
		return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View>
                        <KeyboardAvoidingView style = {styles.container}>
                            <Text style = {styles.smallfont}>Nome</Text>
                            <TextInput
                                style = {styles.input}
                                onChangeText={(text) => this.setState({ nome: text })}
                                textContentType = 'name'
                            />
                            <Text style = {styles.smallfont}>Idade</Text>
                            <TextInput
                                style = {styles.input}
                                onChangeText={(text) => this.setState({ idade: text })}
                                textContentType = 'number'
                                keyboardType = 'numeric'
                            />
                            <Text style = {styles.smallfont}>Telefone</Text>
                            <TextInput
                                style = {styles.input}
                                onChangeText={(text) => this.setState({ telefone: text })}
                                textContentType = 'telephoneNumber'
                                keyboardType = 'numeric'
                            />
                            <Text style = {styles.smallfont}>CPF</Text>
                            <TextInput
                                style = {styles.input}
                                onChangeText={(text) => this.setState({ cpf: text })}
                                textContentType = 'cpf'
                                keyboardType = 'numeric'
                            />
                            <Text style = {styles.smallfont}>Email</Text>
                            <TextInput
                                style = {styles.input}
                                onChangeText={(text) => this.setState({ email: text })}
                                textContentType = 'email'
                            />
                                <Text style = {styles.smallfont}>Sexo: </Text>
                                <Picker style={styles.pickerSexo} 
                                mode="dialog"
                                selectedValue = {this.state.sexoSelecionado} 
                                onValueChange = {(itemValue, itemIndex) => this.setState({sexoSelecionado: itemValue})}
                                textContentType = 'sexo'
                                >
                                    {sexoSelected}
                                </Picker>
                                
                                <Text style = {styles.smallfont}>Buscar por CEP</Text>
                                <TextInput
                                    style = {styles.inputcep}
                                    placeholder="Digite o CEP: "
                                    onChangeText={(text) => this.setState({ cep: text })}
                                    keyboardType = 'numeric'
                                    min={0}
                                    max={8}

                                />
                                <Button  title="Buscar" onPress={() => this.buscar()} />

                            <Text style = {styles.smallfont}>Logradouro</Text>
                            <TextInput style = {styles.input} placeholder="Digite o logradouro: " value = {this.state.data.logradouro || ''}/>
                            <Text style = {styles.smallfont}>Número</Text>
                            <TextInput style = {styles.input} placeholder="(11) 9999-9999: " onChangeText={(text) => this.setState({ numero: text })}/>
                            <Text style = {styles.smallfont}>Localidade</Text>
                            <TextInput style = {styles.input} placeholder="Digite sua localidade: " value = {this.state.data.localidade || ''}/>
                            <Text style = {styles.smallfont}>Bairro</Text>
                            <TextInput style = {styles.input} placeholder="Digite seu Bairro: " value = {this.state.data.bairro || ''}/>
                            <Text style = {styles.smallfont}>UF</Text>
                            <TextInput style = {styles.input} placeholder="Digite seu estado: " value = {this.state.data.uf || ''}/>
                        </KeyboardAvoidingView>
                    </View>
                </ScrollView >
            </SafeAreaView >
  	);
  }
}

const styles = StyleSheet.create({
  containerSc: {

    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    width: "100%",
    marginHorizontal: 20,

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
    paddingTop: 70,
    
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
  inputcep: {
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
    flex: 1,
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
  smallfont: {
    marginRight:150,
    flex: 1,
    
      
  },
  submit:{
    fontSize:15,
    color: '#fff',
  },
    pickerSexo:{
        flex:1,
        width: "35%",
        height: 43,

    },
  containerSc: {

    marginTop: Constants.statusBarHeight,
  },
});
