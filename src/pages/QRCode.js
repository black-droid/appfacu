import React from 'react';
import {View,
        Button,
        KeyboardAvoidingView,
        Text,
        TextInput,
        TouchableOpacity
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

export default function QRCodeScreen({ navigation }) {
  return (
      <KeyboardAvoidingView behavior='padding'
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <QRCode
          value= "QRCODE"
          color="#000"
          backgroundColor="#fff"

          />

        <Button title="Voltar"
         onPress={() => navigation.goBack()} />



        </KeyboardAvoidingView>


  );
}
