import React from 'react';
import { Button, 
				StyleSheet, 
				Text, 
				TouchableOpacity,
				TextInput, 
				View, 
				Picker,        
				SafeAreaView,
				ScrollView,
				KeyboardAvoidingView,
			 } from 'react-native';

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
										id = 'name'
								/>
								<Text style = {styles.smallfont}>Idade</Text>
								<TextInput
										style = {styles.input}
										onChangeText={(text) => this.setState({ idade: text })}
										id = 'number'
										keyboardType = 'numeric'
								/>
								<Text style = {styles.smallfont}>Telefone</Text>
								<TextInput
										style = {styles.input}
										onChangeText={(text) => this.setState({ telefone: text })}
										id = 'telephoneNumber'
										keyboardType = 'numeric'
								/>
								<Text style = {styles.smallfont}>CPF</Text>
								<TextInput
										style = {styles.input}
										onChangeText={(text) => this.setState({ cpf: text })}
										id = 'cpf'
										keyboardType = 'numeric'
								/>
								<Text style = {styles.smallfont}>Email</Text>
								<TextInput
										style = {styles.input}
										onChangeText={(text) => this.setState({ email: text })}
										id = "email"
								/>
										<Text style = {styles.smallfont}>Sexo: </Text>
										<Picker style={styles.pickerSexo} 
										mode="dialog"
										selectedValue = {this.state.sexoSelecionado} 
										onValueChange = {(itemValue, itemIndex) => this.setState({sexoSelecionado: itemValue})}
										id = 'sexo'
										>
												{sexoSelected}
										</Picker>
										
										<Text style = {styles.smallfont}>Buscar por CEP</Text>
										<TextInput
												style = {styles.input}
												placeholder="Digite o CEP: "
												onChangeText={(text) => this.setState({ cep: text })}
												keyboardType = 'numeric'
												onSubmitEditing ={() => this.buscar()}
												

										/>

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
								<TouchableOpacity style = {styles.button} title="Login" onPress={() => this.props.navigation.navigate('Login')}>
									<Text>Cadastre-se</Text>
								</TouchableOpacity>
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
		backgroundColor: '#6ccff6',
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
		width: "50%",
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
