import React, { useState, useEffect} from 'react';
import {Button,
				Image,
				StyleSheet,
				Text, 
				TouchableOpacity,
				TextInput, 
				View, 
				Picker,        
				ScrollView,
} from 'react-native';

import { data } from './Dados';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import {Formik} from 'formik';
import * as Yup from 'yup';


export default function  RegisterScreen ({ navigation, route }) {
	const [image, setImage] = useState(null);
	useEffect(() => {
		(async () => {
			if (Constants.platform.android) {
				const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
				if (status !== 'granted') {
					Alert.alert('Desculpe!', 'Mas precisamos dessa permissão do seu dispositivo.');
				}
			}
		})();
	}, []);		
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			quality: 1,
		});		
		console.log(result);		
		if (!result.cancelled) {
			setImage(result.uri);
		}
	};



	const [nome, setNome] = useState('');
	const [idade, setIdade] = useState('');
	const [telefone, setTelefone] = useState('');
	const [cpf, setCPF] = useState('');
	const [email, setEmail] = useState('');
	const [sexo, setSexo] = useState('');
	const [deficiencia, setDeficiencia] = useState('Selecione');
	const [qualDeficiencia, setQualDeficiencia] = useState('Selecione');
	const [plano, setPlano] = useState('Selecione');
	const [cep, setCEP] = useState('');
	const [address, setAddress] = useState('');
	const [numero, setNumero] = useState('');	
	const [usuario, setUsuario] = useState('');
	const [senha, setSenha] = useState('');
	const [senhaConfirmar, setSenhaConfirmar] = useState('');
	const [validation, setValidation] = useState('')


	const buscar = async () => {
    let address = await fetch(`https://ws.apicep.com/busca-cep/api/cep/${cep}.json`);
    address = await address.json();
    setAddress(address);
};


function sendData(){
	for (var i=0; i <= data.length; i++) {
		if(data[i]['email'] != dados['email'] && data[i]['user'] != dados['user']) {
			if (i >= data.length-1){
				data.push(dados);
				setValidation('Dados cadastrados com sucesso!')
				break;
			}		
		}
		else{
			setValidation('Usuário já cadastrado!')
			break;
		}
	}
}

const dados = {
	'photo': image,
	'name' : nome,
	'age': idade,
	'phone': telefone,
	'cpf': cpf,
	'email' : email,
	'sexo': sexo,
	'disabledPerson': deficiencia,
	'deficiency': qualDeficiencia,
	'plan': plano,
	'cep': address.code,
	'street': address.address,
	'number': numero,
	'locality': address.city,
	'neighborhood': address.district,
	'state': address.state,
	'user': usuario,			
	'password' : senha,
	'confirmdPassword' : senhaConfirmar,
}

function mascaraData( campo, e ){
	var kC = (document.all) ? event.keyCode : e.keyCode;
	var data = campo.value;	
	if( kC!=8 && kC!=46 )	{
		if( data.length==2 ) {
			campo.value = data += '/';
		}
		else if( data.length==5 )	{
			campo.value = data += '/';
		} else 
		campo.value = data;
	}
}

{/* <html>
<head>
<title>Mascara data formulario</title>

</head>
<body>
	<form>
		<input type="text" name="outra_data" id="outra_data" maxlength="10" onkeypress="mascaraData( this, event )" />
	</form>

</body>
</html>
 */}

const FormSchema = Yup.object().shape({
	name: Yup.string()
		.max(50, '* Limite de caracteres atingido')
		.required('* Campo obrigatório'),
	age: Yup.string()
		.min(6, '* Digite uma data válida ex: Dia/Mês/Ano')
		.max(8, '* Digite uma data válida ex: Dia/Mês/Ano')
		.required('* Campo obrigatório'),
	phone: Yup.string()
		.max(20, '* Limite de caracteres atingido')
		.required('* Campo obrigatório'),
	cpf: Yup.string()
		.length(11, '* Digite um CPF válido')
		.required('* Campo obrigatório'),		
	email: Yup.string()
		.email('* Digite um e-mail válido')
		.lowercase('* Somente letras minúsculas')
		.required('* Campo obrigatório'),
	sexo: Yup.mixed()
		.notOneOf(['Selecione', undefined],'* Campo obrigatório'),
	disabledPerson: Yup.mixed()
		.notOneOf(['Selecione', undefined],'* Campo obrigatório'),
	deficiency: Yup.mixed(), //Não sei como deixar obrigatório	
	plan: Yup.mixed()
		.notOneOf(['Selecione', undefined],'* Campo obrigatório'),
	cep: Yup.string()
		.min(8, '')
		.max(9, '')
		.required('* Campo obrigatório'),
	number: Yup.string()
		.required('* Campo obrigatório'),
	user: Yup.string()
		.max(15, 'Limite de caracteres atingido')
		.required('* Campo obrigatório'),
	password: Yup.string()
		.min(4, 'A senha de ter no mínimo 4 caracteres')
		.required('* Campo obrigatório'),
	confirmdPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], '* As senhas não correspondem')
		.min(4, 'A senha de ter no mínimo 4 caracteres')
		.required('* Campo obrigatório'),
});



	return (
		<ScrollView>
			<View style={styles.container}>			

				<View style={styles.photoPosition}>
					{image==null ? 
					<Icon style={styles.fotoNull} name='account-circle' size={140} color={"#06a"}/>:
					image && <Image source={{ uri: image }} style={styles.fotoPerson} />}					
					<Icon style={styles.photoEdit} name='camera' size={30} color={"#666"} onPress={pickImage} />
				</View>

				<Formik
					initialValues={{
						'name' : '',
						'age': '',
						'phone': '',
						'cpf': '',
						'email' : '',
						'sexo': '',
						'disabledPerson': '',
						'deficiency': '',
						'plan': '',
						'cep': '',
						'number': '',
						'user': '',			
						'password' : '',
						'confirmdPassword': '',
					}}
					onSubmit={sendData}
					validationSchema={FormSchema}
				/* 	onReset={('')} */


					
				

				>
				{({ values, handleChange, handleSubmit, errors, touched, setFieldTouched, setFieldValue, handleReset}) => (
					<View>
						<View>
							<Text style = {styles.smallfont}>Nome</Text>
								{errors.name && touched.name && 
								<Text style={styles.validation}>{errors.name}</Text>}
							<TextInput style = {styles.input}
								placeholder = 'Nome completo'								
								ref={setNome(values.name)}
								value={values.name}
								onChangeText={handleChange('name')}
								onBlur={() => setFieldTouched('name', true)}/>		
						</View>						
						
						<View>
							<Text style = {styles.smallfont}>Data de Nascimento</Text>
								{errors.age && touched.age && 
								<Text style={styles.validation}>{errors.age}</Text>}
							<TextInput style = {styles.input}
								placeholder = 'Data de Nascimento'												
								keyboardType = 'numeric'
								ref={setIdade(values.age)}
								value={values.age}
								onChangeText={handleChange('age')}
								onBlur={() => setFieldTouched('age', true)}/>
						</View>
						
						<View>
							<Text style = {styles.smallfont}>Telefone</Text>
								{errors.phone && touched.phone && 
								<Text style={styles.validation}>{errors.phone}</Text>}
							<TextInput style = {styles.input}
								placeholder = ' DDD + número'								
								keyboardType = 'phone-pad'
								ref={setTelefone(values.phone)}
								value={values.phone}
								onChangeText={handleChange('phone')}
								onBlur={() => setFieldTouched('phone', true)}/>
						</View>
						
						<View>
							<Text style = {styles.smallfont}>CPF</Text>
								{errors.cpf && touched.cpf && 
								<Text style={styles.validation}>{errors.cpf}</Text>}
							<TextInput style = {styles.input}
								placeholder = 'Somente números'								
								keyboardType = 'numeric'
								ref={setCPF(values.cpf)}
								value={values.cpf}
								onChangeText={handleChange('cpf')}
								onBlur={() => setFieldTouched('cpf', true)}/>
						</View>

						<View>
							<Text style = {styles.smallfont}>Email</Text>
								{errors.email && touched.email && 
								<Text style={styles.validation}>{errors.email}</Text>}
							<TextInput style = {styles.input}
								placeholder = 'E-mail'								
								keyboardType = 'email-address'
								autoCapitalize= "none"
								ref={setEmail(values.email)}
								value={values.email}
								onChangeText={handleChange('email')}
								onBlur={() => setFieldTouched('email', true)}/>
						</View>
						
						<View>
						<Text style = {styles.smallfont}> Sexo: </Text>
							{errors.sexo && touched.sexo && 
							<Text style={styles.validation}>{errors.sexo}</Text>}
						<Picker style={styles.picker}
							mode = "dropdown"
							ref={setSexo(values.sexo)}
							selectedValue = {values.sexo}
							onValueChange = {(itemValue) => setFieldValue('sexo',itemValue)}
							onBlur={() => setFieldTouched('sexo', true)}>
							<Picker.Item label="Selecione" value="Selecione" />
							<Picker.Item label="Masculino" value="Masculino" />
							<Picker.Item label="Feminino" value="Feminino" />
						</Picker>
						</View>

						<View>
						<Text style = {styles.smallfont}> Pessoa com Deficiência: </Text>
							{errors.disabledPerson && touched.disabledPerson && 
							<Text style={styles.validation}>{errors.disabledPerson}</Text>}
						<Picker style={styles.picker}
							mode = "dropdown"
							ref={setDeficiencia(values.disabledPerson)}
							selectedValue = {values.disabledPerson}
							onValueChange = {(itemValue) => setFieldValue('disabledPerson',itemValue)}
							onBlur={() => setFieldTouched('disabledPerson', true)}>
							<Picker.Item label="Selecione" value="Selecione" />
							<Picker.Item label="Sim" value="Sim" />
							<Picker.Item label="Não" value="Não" />
						</Picker>
						</View>

						{deficiencia == "Sim" ?								
						<Text style = {styles.smallfont}> Qual Deficiência: </Text>
						: null}
						{deficiencia == "Sim" ?								
						(errors.deficiency && touched.deficiency && 
						<Text style={styles.validation}>{errors.deficiency}</Text>)
						: undefined}								
						{deficiencia == "Sim" ? 								
						<Picker style={styles.picker}
							mode = "dropdown"
							ref={setQualDeficiencia(values.deficiency)}
							selectedValue = {values.deficiency} 
							onValueChange = {(itemValue) => setFieldValue('deficiency',itemValue)}
							onBlur={() => setFieldTouched('deficiency', true)}>
							<Picker.Item label="Selecione" value="Selecione"/>
							<Picker.Item label="Deficiência Auditiva" value="Deficiência Auditiva"/>
							<Picker.Item label="Deficiência Visual" value="Deficiência Visual" />
							<Picker.Item label="Deficiência Física" value="Deficiência Física" />
							<Picker.Item label="Deficiência Intelectual" value="Deficiência Intelectual" />
							<Picker.Item label="Deficiência Multipla" value="Deficiência Multipla" />
						</Picker> : null}
					
						<View>
						<Text style = {styles.smallfont}> Plano de Saúde: </Text>
							{errors.plan && touched.plan && 
								<Text style={styles.validation}>{errors.plan}</Text>}
						<Picker style={styles.picker}
							mode = "dropdown"
							ref={setPlano(values.plan)}
							selectedValue = {values.plan} 
							onValueChange = {(itemValue) => setFieldValue( 'plan',itemValue)}
							onBlur={() => setFieldTouched('plan', true)}>
							<Picker.Item label="Selecione" value="Selecione" />
							<Picker.Item label="Empresarial" value="Empresarial" />
							<Picker.Item label="Particular" value="Particular" />
							<Picker.Item label="Não Possui" value="Não Possui" />
						</Picker>
						</View>
								
						<View>
						<Text style = {styles.smallfont}>Buscar por CEP</Text>
						<View style={styles.validationPosition}>
							<Text style={styles.validation}>
								{address.ok===false ? '* '+(address.message) : '' }
							</Text>
						</View>
							{errors.cep && touched.cep && 
							<Text style={styles.validation}>{errors.cep}</Text>}
						<TextInput style = {styles.input}
							placeholder="Digite o CEP: "
							keyboardType = 'numeric'
							ref={setCEP(values.cep)}
							value={values.cep}
							onChangeText={handleChange('cep')}
							onBlur={() => setFieldTouched('cep', true)}
							onSubmitEditing ={() => buscar()}/>
						</View>

						<Text style = {styles.smallfont}>Logradouro</Text>
						<TextInput style = {styles.input}
							placeholder="Digite o logradouro"
							value = {address.address || ''}/>

						<View>
							<Text style = {styles.smallfont}>Número</Text>
								{errors.number && touched.number && 
								<Text style={styles.validation}>{errors.number}</Text>}
							<TextInput style = {styles.input}
								placeholder="Nº"
								keyboardType = 'numeric'
								ref={setNumero(values.number)}
								value={values.number}
								onChangeText={handleChange('number')}
								onBlur={() => setFieldTouched('number', true)}/>
						</View>
				
						<Text style = {styles.smallfont}>Localidade</Text>
						<TextInput style = {styles.input}
							placeholder="Digite sua localidade "
							value = {address.city || ''}/>
					
						<Text style = {styles.smallfont}>Bairro</Text>
						<TextInput style = {styles.input}
							placeholder="Digite seu bairro "
							value = {address.district || ''}/>

						<Text style = {styles.smallfont}>UF</Text>
						<TextInput style = {styles.input} 
							placeholder="Digite seu estado " 
							value = {address.state || ''}/>

						<Text></Text>
						<Text></Text>
						
						<View>
							<Text style = {styles.smallfont}>Usuário</Text>
								{errors.user && touched.user && 
								<Text style={styles.validation}>{errors.user}</Text>}
							<TextInput style = {styles.input}
								placeholder="Usuário"
								ref={setUsuario(values.user)}
								value={values.user}
								onChangeText={handleChange('user')}
								onBlur={() => setFieldTouched('user', true)}/>
						</View>
						
						<View>
							<Text style = {styles.smallfont}>Senha</Text>
								{errors.password && touched.password && 
								<Text style={styles.validation}>{errors.password}</Text>}
							<TextInput style = {styles.input}
								placeholder="Senha"
								secureTextEntry={true}
								ref={setSenha(values.password)}
								value={values.password}
								onChangeText={handleChange('password')}
								onBlur={() => setFieldTouched('password', true)}/>
						</View>

						<View>
							<Text style = {styles.smallfont}>Confirmar Senha</Text>
								{errors.confirmdPassword && touched.confirmdPassword && 
								<Text style={styles.validation}>{errors.confirmdPassword}</Text>}
							<TextInput style = {styles.input}
								placeholder="Confirmar Senha"
								secureTextEntry={true}
								ref={setSenhaConfirmar(values.confirmdPassword)}
								value={values.confirmdPassword}
								onChangeText={handleChange('confirmdPassword')}
								onBlur={() => setFieldTouched('confirmdPassword', true)}/>
						</View>

						<View style={styles.messagePosition}>		
						{validation==='Usuário já cadastrado!' ?
						<Text style={styles.menssage2}>{validation}</Text> :
						<Text style={styles.menssage1}>{validation}</Text> }
						</View>
						
						<TouchableOpacity 
							style = {styles.button}
							onPress={handleSubmit}>	
							<Text style={styles.text}>CONCLUIR</Text>								
						</TouchableOpacity>

{/* 						<TouchableOpacity 
							style = {styles.button}
							onPress={handleReset}>	
							<Text style={styles.text}>Reset</Text>								
						</TouchableOpacity> */}

							
			
					</View>)}
				</Formik>		
				
			</View>
		</ScrollView >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6ccff6',
		padding: 20
	},
	input: {
		backgroundColor: '#fff',
		marginTop: 2,
		marginBottom: 10,		
		padding: 10,
		borderRadius: 5,
		fontSize: 18,
		color: '#222',
	},
	picker:{
		marginTop: 2,
		marginBottom: 10,
		height: 40,
		backgroundColor: "#fff",
	},
	button: {
		backgroundColor: '#06a',
		marginTop: 40,
		marginBottom: 60,
		
		marginHorizontal: 100,
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
	validationPosition: {
		alignSelf: "flex-end",
		paddingRight: 20,
		position: "absolute",
	},
	validation: {
		fontSize: 14,
		color: '#f00',
	},
	fotoNull: {
		padding: 1,
    borderRadius: 100,
    backgroundColor: '#fff',
	},
	photoEdit: {
		position: "absolute",
		marginTop: 110,
		marginLeft: 100,
		padding: 10,
		borderRadius: 100,
		backgroundColor: "#ddd",
	},
	photoPosition: {
		alignSelf: "center",
		margin: 20,
	},
	fotoPerson: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor:"#ddd",
    borderWidth: 5,
	},
	menssage1: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#060"
	},
	menssage2: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#d00"
	},
	messagePosition: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,	
	},
});
