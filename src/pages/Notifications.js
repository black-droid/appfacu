import React from 'react';
import { View, Text, Button,TouchableOpacity, TextInput } from 'react-native';

// import { Container } from './styles';

export default function NotificationsScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}