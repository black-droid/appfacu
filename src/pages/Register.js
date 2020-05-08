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

export default class App extends React.Component {
	state = {
		nome: '',
		idade: '',
		telefone:'',
		cpf: '',
		email:'',
		data: {},
		cep: '',
		numero: '',
		sexoSelecionado: 0,
		sexos: [
			{key: 1, sexo: 'Masculino'},
			{key: 2, sexo: 'Feminino'},
		],
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
				<ScrollView>
					<View>
						<KeyboardAvoidingView behavior='padding'
							style = {styles.container2}>
								<Text style = {styles.smallfont}>Nome</Text>
								<TextInput
									style = {styles.input}
									onChangeText={(text) => this.setState({ nome: text })}
									id = 'name'
								/>
								<Text style = {styles.smallfont}>Data de Nascimento</Text>
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
								>{sexoSelected}
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
								<TextInput style = {styles.input}
									placeholder="Digite o logradouro:"
									value = {this.state.data.logradouro || ''}
								/>
								<Text style = {styles.smallfont}>Número</Text>
								<TextInput style = {styles.input}
									placeholder="Nº"
									onChangeText={(text) => this.setState({ numero: text })}
									keyboardType = 'numeric'
								/>
								<Text style = {styles.smallfont}>Localidade</Text>
								<TextInput style = {styles.input}
									placeholder="Digite sua localidade: "
									value = {this.state.data.localidade || ''}
								/>
								<Text style = {styles.smallfont}>Bairro</Text>
								<TextInput style = {styles.input}
									placeholder="Digite seu Bairro: "
									value = {this.state.data.bairro || ''}
								/>
								<Text style = {styles.smallfont}>UF</Text>
								<TextInput style = {styles.input} 
									placeholder="Digite seu estado: " 
									value = {this.state.data.uf || ''}
								/>
								<TouchableOpacity style = {styles.button} 
									title="Login" 
									onPress={() => this.props.navigation.navigate('Login')}>
									<Text style={styles.text}>CONCLUIR</Text>
								</TouchableOpacity>
						</KeyboardAvoidingView>
					</View>
				</ScrollView >
			</SafeAreaView >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6ccff6',
	},
	container2: {
		marginTop: 20,
		marginHorizontal: 20,
		height: 1100
	},
	input: {
		backgroundColor: '#fff',
		marginBottom: 10,
		padding: 10,
		borderRadius: 5,
		fontSize: 18,
		color: '#222',
	},
	pickerSexo:{
		borderWidth: 1,
		borderColor: "#fff",
		marginBottom: 10,
		height: 40,
		backgroundColor: "#fff",
	},
	button: {
		backgroundColor: '#06a',
		margin: 40,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
	},
	smallfont: {
		fontWeight: 'bold',
		fontSize: 18,			
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: "#fff"
	},
});
