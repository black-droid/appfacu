import React, { useState, useEffect} from 'react';
import {Image,
				StyleSheet,
				Text, 
				TouchableOpacity,
				TextInput, 
				View, 
				Picker,        
				ScrollView,
} from 'react-native';

import { data } from './Dados';
import { i }  from './Login'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { TextInputMask } from 'react-native-masked-text'
import {Formik} from 'formik';
import * as Yup from 'yup';


export default function  EditCaregiverScreen ({ navigation, route }) {
	const [image, setImage] = useState(null);
	const [imageCuidador, setImageCuidador] = useState(null);
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
	const pickImageCuidador= async () => {
		let result2 = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			quality: 1,
		});		
		console.log(result2);		
		if (!result2.cancelled) {
			setImageCuidador(result2.uri);
		}
	};

	const [nomeCuidador, setNomeCuidador] = useState('');
	const [idadeCuidador, setIdadeCuidador] = useState('');
	const [cpfCuidador, setCPFCuidador] = useState('');
	const [sexoCuidador, setSexoCuidador] = useState('');

	const [nome, setNome] = useState('');
	const [idade, setIdade] = useState('');
	const [telefone, setTelefone] = useState('');
	const [celular, setCelular] = useState('');
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
	if(data[i]['email'] === dados['email'] && data[i]['user'] === dados['user']) {
		data[i] = dados;
		setValidation('Dados atualizados com sucesso!')
	}
}


const dados = {
	'photoCaregiver': (imageCuidador===null ? data[i]['photoCaregiver'] : imageCuidador),
	'nameCaregiver': nomeCuidador,
	'ageCaregiver': idadeCuidador,
	'cpfCaregiver': cpfCuidador,
	'sexoCaregiver': sexoCuidador, 
	'photo': (image===null ? data[i]['photo'] : image),
	'name' : nome,
	'age': idade,
	'phone': telefone,
	'cellphone': celular,
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
	'password' : (senha==='' ? data[i]['password'] : senha),
	'confirmdPassword' : (senhaConfirmar==='' ? data[i]['confirmdPassword'] : senhaConfirmar),
}

const FormSchema = Yup.object().shape({
	nameCaregiver: Yup.string()
		.max(50, '* Limite de caracteres atingido')
		.required('* Campo obrigatório'),
	ageCaregiver: Yup.string()
		.length(10, '* Digite uma data válida')
		.required('* Campo obrigatório'),
	cpfCaregiver: Yup.string()
		.length(14, '* Digite um CPF válido')
		.required('* Campo obrigatório'),
	sexoCaregiver: Yup.mixed()
		.notOneOf(['Selecione', undefined],'* Campo obrigatório'),
	name: Yup.string()
		.max(50, '* Limite de caracteres atingido')
		.required('* Campo obrigatório'),
	age: Yup.string()
		.length(10, '* Digite uma data válida')
		.required('* Campo obrigatório'),
	phone: Yup.string()
		.min(14, '* Digite um número válido')
		.max(14, '* Digite um número válido')
		.required('* Campo obrigatório'),
	cellphone: Yup.string()
		.min(15, '* Digite um número válido')
		.required('* Campo obrigatório'),
	cpf: Yup.string()
		.length(14, '* Digite um CPF válido')
		.required('* Campo obrigatório'),		
	email: Yup.string()
		.oneOf([data[i]['email'], null], '* O e-mail não pode ser alterado')
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
		.length(9, '')
		.required('* Campo obrigatório'),
	street: Yup.string()
		.required('* Campo obrigatório'),
	number: Yup.string()
		.required('* Campo obrigatório'),
	city: Yup.string()
		.required('* Campo obrigatório'),
	neighborhood: Yup.string()
		.required('* Campo obrigatório'),
	state: Yup.string()
		.required('* Campo obrigatório'),
	user: Yup.string()
		.oneOf([data[i]['user'], null], '* O usuário não pode ser alterado')
		.max(20, 'Limite de caracteres atingido')
		.required('* Campo obrigatório'),
	oldPassword: Yup.string()
		.oneOf([data[i]['password'], null], '* Senha antiga não confere')
		.min(4, 'A senha de ter no mínimo 4 caracteres'),
	password: Yup.string()
		.min(4, 'A senha de ter no mínimo 4 caracteres'),
	confirmdPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], '* As senhas não correspondem')
		.min(4, 'A senha de ter no mínimo 4 caracteres'),
});



	return (
		<ScrollView>
			<View style={styles.container}>			

				<View style={styles.photoPosition}>
					<View>
					{data[i]['photoCaregiver']===null ? 
						(imageCuidador==null ? 
						<Icon style={styles.fotoNull} name='account-circle' size={140} color={"#06a"}/>:
						imageCuidador && <Image source={{ uri: imageCuidador }} style={styles.fotoPerson} />) :
						(imageCuidador==null ?
						data[i]['photoCaregiver'] && <Image source={{ uri: data[i]['photoCaregiver'] }} style={styles.fotoPerson} />:
						imageCuidador && <Image source={{ uri: imageCuidador }} style={styles.fotoPerson} />)}										
						<Icon style={styles.photoEdit} name='camera' size={30} color={"#666"} onPress={pickImageCuidador} />
						<View style={styles.titlePosition}>
           		<Text style={styles.title}>CUIDADOR</Text>
        		</View>
					</View>

					<View>
					{data[i]['photo']===null ? 
						(image==null ? 
						<Icon style={styles.fotoNull} name='account-circle' size={140} color={"#06a"}/>:
						image && <Image source={{ uri: image }} style={styles.fotoPerson} />) :
						(image==null ?
						data[i]['photo'] && <Image source={{ uri: data[i]['photo'] }} style={styles.fotoPerson} />:
						image && <Image source={{ uri: image }} style={styles.fotoPerson} />)}										
						<Icon style={styles.photoEdit} name='camera' size={30} color={"#666"} onPress={pickImage} />
						<View style={styles.titlePosition}>
            	<Text style={styles.title}>CUIDADO</Text>
         		</View>
					</View>

				</View>

				<Formik
					initialValues={{
						'nameCaregiver': data[i]['nameCaregiver'],
						'ageCaregiver': data[i]['ageCaregiver'],
						'cpfCaregiver': data[i]['cpfCaregiver'],
						'sexoCaregiver': data[i]['sexoCaregiver'], 
						'name' : data[i]['name'],
						'age': data[i]['age'],
						'phone': data[i]['phone'],
						'cellphone': data[i]['cellphone'],
						'cpf': data[i]['cpf'],
						'email' : data[i]['email'],
						'sexo': data[i]['sexo'],
						'disabledPerson': data[i]['disabledPerson'],
						'deficiency': data[i]['deficiency'],
						'plan': data[i]['plan'],
						'cep': data[i]['cep'],
						'street': data[i]['street'],
						'number': data[i]['number'],
						'city': data[i]['locality'],
						'neighborhood': data[i]['neighborhood'],
						'state': data[i]['state'],
						'number': data[i]['number'],
						'user': data[i]['user'],
						'oldPassword' : '',
						'password' : '',
						'confirmdPassword': '',
					}}
					onSubmit={sendData}
					validationSchema={FormSchema}
				/* 	onReset={('')} */			

				>
				{({ values, handleChange, handleSubmit, errors, touched, setFieldTouched, setFieldValue, handleReset}) => (
					<View>
						<View style={styles.titlePosition2}>
							<Text style={styles.title2}>DADOS DO CUIDADOR</Text>
						</View>

						<View>
							<Text style = {styles.smallfont}>Nome</Text>
								{errors.nameCaregiver && touched.nameCaregiver && 
								<Text style={styles.validation}>{errors.nameCaregiver}</Text>}
							<TextInput style = {styles.input}
								placeholder = 'Nome Completo'					
								ref={setNomeCuidador(values.nameCaregiver)}
								value={values.nameCaregiver}
								onChangeText={handleChange('nameCaregiver')}
								onBlur={() => setFieldTouched('nameCaregiver', true)}/>		
						</View>						
						
						<View>
							<Text style = {styles.smallfont}>Data de Nascimento</Text>
								{errors.ageCaregiver && touched.ageCaregiver && 
								<Text style={styles.validation}>{errors.ageCaregiver}</Text>}
							<TextInputMask
								type={'datetime'}
								options={{format: 'DD/MM/YYYY'}}
								style = {styles.input}
								placeholder = 'DD/MM/AAAA'												
								keyboardType = 'numeric'
								ref={setIdadeCuidador(values.ageCaregiver)}
								value={values.ageCaregiver}
								onChangeText={handleChange('ageCaregiver')}
								onBlur={() => setFieldTouched('ageCaregiver', true)}/>
						</View>
						
						<View>
							<Text style = {styles.smallfont}>Telefone</Text>
								{errors.phone && touched.phone && 
								<Text style={styles.validation}>{errors.phone}</Text>}
							<TextInputMask
								type={'cel-phone'}
								options={{maskType: 'BRL', withDDD: true, dddMask: '(99) '}}
								style = {styles.input}
								placeholder = ' DDD + Número'								
								keyboardType = 'phone-pad'
								ref={setTelefone(values.phone)}
								value={values.phone}
								onChangeText={handleChange('phone')}
								onBlur={() => setFieldTouched('phone', true)}/>
						</View>

						<View>
							<Text style = {styles.smallfont}>Celular</Text>
								{errors.cellphone && touched.cellphone && 
								<Text style={styles.validation}>{errors.cellphone}</Text>}
							<TextInputMask
								type={'cel-phone'}
								options={{maskType: 'BRL', withDDD: true, dddMask: '(99) '}}
								style = {styles.input}
								placeholder = ' DDD + Número'								
								keyboardType = 'phone-pad'
								ref={setCelular(values.cellphone)}
								value={values.cellphone}
								onChangeText={handleChange('cellphone')}
								onBlur={() => setFieldTouched('cellphone', true)}/>
						</View>

						
						<View>
							<Text style = {styles.smallfont}>CPF</Text>
								{errors.cpfCaregiver && touched.cpfCaregiver && 
								<Text style={styles.validation}>{errors.cpfCaregiver}</Text>}
							<TextInputMask
								type={'cpf'}
								style = {styles.input}
								placeholder = 'CPF'								
								keyboardType = 'numeric'
								ref={setCPFCuidador(values.cpfCaregiver)}
								value={values.cpfCaregiver}
								onChangeText={handleChange('cpfCaregiver')}
								onBlur={() => setFieldTouched('cpfCaregiver', true)}/>
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
							{errors.sexoCaregiver && touched.sexoCaregiver && 
							<Text style={styles.validation}>{errors.sexoCaregiver}</Text>}
						<Picker style={styles.picker}
							mode = "dropdown"
							ref={setSexoCuidador(values.sexoCaregiver)}
							selectedValue = {values.sexoCaregiver}
							onValueChange = {(itemValue) => setFieldValue('sexoCaregiver',itemValue)}
							onBlur={() => setFieldTouched('sexoCaregiver', true)}>
							<Picker.Item label="Selecione" value="Selecione" />
							<Picker.Item label="Masculino" value="Masculino" />
							<Picker.Item label="Feminino" value="Feminino" />
						</Picker>
						</View>

						<View style={styles.titlePosition2}>
							<Text style={styles.title2}>DADOS DA PESSOA CUIDADA</Text>
						</View>

						<View>
							<Text style = {styles.smallfont}>Nome</Text>
								{errors.name && touched.name && 
								<Text style={styles.validation}>{errors.name}</Text>}
							<TextInput style = {styles.input}
								placeholder = 'Nome Completo'					
								ref={setNome(values.name)}
								value={values.name}
								onChangeText={handleChange('name')}
								onBlur={() => setFieldTouched('name', true)}/>		
						</View>

						<View>
							<Text style = {styles.smallfont}>Data de Nascimento</Text>
								{errors.age && touched.age && 
								<Text style={styles.validation}>{errors.age}</Text>}
							<TextInputMask
								type={'datetime'}
								options={{format: 'DD/MM/YYYY'}}
								style = {styles.input}
								placeholder = 'DD/MM/AAAA'												
								keyboardType = 'numeric'
								ref={setIdade(values.age)}
								value={values.age}
								onChangeText={handleChange('age')}
								onBlur={() => setFieldTouched('age', true)}/>
						</View>

						<View>
							<Text style = {styles.smallfont}>CPF</Text>
								{errors.cpf && touched.cpf && 
								<Text style={styles.validation}>{errors.cpf}</Text>}
							<TextInputMask
								type={'cpf'}
								style = {styles.input}
								placeholder = 'CPF'								
								keyboardType = 'numeric'
								ref={setCPF(values.cpf)}
								value={values.cpf}
								onChangeText={handleChange('cpf')}
								onBlur={() => setFieldTouched('cpf', true)}/>
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

						<View style={styles.titlePosition2}>
							<Text style={styles.title2}>ENDEREÇO</Text>
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
						<TextInputMask
							type={'zip-code'}
							style = {styles.input}
							placeholder="Digite o CEP"
							keyboardType = 'numeric'
							ref={setCEP(values.cep)}
							value={values.cep}
							onChangeText={handleChange('cep')}
							onBlur={() => setFieldTouched('cep', true)}
							onSubmitEditing ={() => buscar()}/>
						</View>

						<View>
							<Text style = {styles.smallfont}>Logradouro</Text>
								{errors.street && touched.street && 
								<Text style={styles.validation}>{errors.street}</Text>}
							<TextInput style = {styles.input}
								placeholder="Logradouro"
								value = { values.street = address.address || ''}
								onChangeText={handleChange('street')}
								onBlur={() => setFieldTouched('street', true)}/>
						</View>

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
				
						<View>
							<Text style = {styles.smallfont}>Localidade</Text>
								{errors.city && touched.city && 
								<Text style={styles.validation}>{errors.city}</Text>}
							<TextInput style = {styles.input}
								placeholder="Localidade "
								value = {values.city = address.city || ''}
								onChangeText={handleChange('city')}
								onBlur={() => setFieldTouched('city', true)}/>
						</View>

						<View>
							<Text style = {styles.smallfont}>Bairro</Text>
								{errors.neighborhood && touched.neighborhood && 
								<Text style={styles.validation}>{errors.neighborhood}</Text>}
							<TextInput style = {styles.input}
								placeholder="Bairro "
								value = {values.neighborhood = address.district || ''}
								onChangeText={handleChange('neighborhood')}
								onBlur={() => setFieldTouched('neighborhood', true)}/>
						</View>
						
						<View>
							<Text style = {styles.smallfont}>UF</Text>
								{errors.state && touched.state && 
								<Text style={styles.validation}>{errors.state}</Text>}
							<TextInput style = {styles.input} 
								placeholder="Estado " 
								value = {values.state = address.state || ''}
								onChangeText={handleChange('state')}
								onBlur={() => setFieldTouched('state', true)}/>
						</View>

						<View style={styles.titlePosition2}>
							<Text style={styles.title2}>SENHA DE ACESSO</Text>
						</View>						
						<View>
							<Text style = {styles.smallfont}>Usuário</Text>
								{errors.user && touched.user && 
								<Text style={styles.validation}>{errors.user}</Text>}
							<TextInput style = {styles.input}
								placeholder="Usuário"
								autoCorrect  = {false}
								ref={setUsuario(values.user)}
								value={values.user}
								onChangeText={handleChange('user')}
								onBlur={() => setFieldTouched('user', true)}/>
						</View>

						<View>
							<Text style = {styles.smallfont}>Senha Antiga</Text>
								{errors.oldPassword && touched.oldPassword && 
								<Text style={styles.validation}>{errors.oldPassword}</Text>}
							<TextInput style = {styles.input}
								placeholder="Senha"
								secureTextEntry={true}
								autoCorrect  = {false}
								value={values.oldPassword}
								onChangeText={handleChange('oldPassword')}
								onBlur={() => setFieldTouched('oldPassword', true)}/>
						</View>
						
						
						<View>
							{(data[i]['password']===values.oldPassword) ?
							(<Text style = {styles.smallfont}>Nova Senha</Text>) : null}							
							{(data[i]['password']===values.oldPassword) ? 
								(errors.password && touched.password && 
								<Text style={styles.validation}>{errors.password}</Text>) : null}
							{(data[i]['password']===values.oldPassword) ?
							(<TextInput style = {styles.input}
								placeholder="Senha"
								secureTextEntry={true}
								autoCorrect  = {false}
								ref={setSenha(values.password)}
								value={values.password}
								onChangeText={handleChange('password')}
								onBlur={() => setFieldTouched('password', true)}/>) : null}
						</View>

						<View>
							{(data[i]['password']===values.oldPassword) ?
							(<Text style = {styles.smallfont}>Confirmar Nova Senha</Text>) : null}
							{(data[i]['password']===values.oldPassword) ?
								(errors.confirmdPassword && touched.confirmdPassword && 
								<Text style={styles.validation}>{errors.confirmdPassword}</Text>) : null}
							{(data[i]['password']===values.oldPassword) ?
							(<TextInput style = {styles.input}
								placeholder="Confirmar Senha"
								secureTextEntry={true}
								autoCorrect  = {false}
								ref={setSenhaConfirmar(values.confirmdPassword)}
								value={values.confirmdPassword}
								onChangeText={handleChange('confirmdPassword')}
								onBlur={() => setFieldTouched('confirmdPassword', true)}/>) : null}
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
		margin: 20,
    borderRadius: 100,
    backgroundColor: '#fff',
	},
	photoEdit: {
		position: "absolute",
		marginTop: 120,
		marginLeft: 110,
		padding: 10,
		borderRadius: 100,
		backgroundColor: "#ddd",
	},
	photoPosition: {
		flexDirection: "row",
		alignSelf: "center",
		marginBottom: 40,
	},
	fotoPerson: {
    height: 150,
		width: 150,
		margin: 18,
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
		marginHorizontal: 40,
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
