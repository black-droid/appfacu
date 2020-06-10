import React from 'react';
import {View,
        Button,
        KeyboardAvoidingView,
        Text,
        TextInput,
        TouchableOpacity,
        StyleSheet,
} from 'react-native';

import QrCode from 'react-native-qrcode-generator';


export default function QRCodeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.component}>
        <Text style={styles.text}>
          Informe o código
        </Text>
        <Text style={styles.text}>
          ao atendente
        </Text>
      <View style={styles.codigo}>
        <Text style={styles.textCodigo}>
          WRS26G
        </Text>
      </View>
      </View>
      <View style={styles.qrCode}>        
      <QrCode
        value='WRS26G'
        size={150}
        bgColor='black'
        fgColor='white'
        />
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  component:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 20,
  },
  text:{
    fontWeight: "bold",
    fontSize: 30,
  },
  codigo:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000",
    height: 60,
    width: "80%",
    marginTop: 20,
  },
  textCodigo:{
    fontWeight: "bold",
    fontSize: 25,
    color: "#fff",
    padding: 10,
  },
  qrCode:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
})
