import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Register({ navigation }) {
  function navigateToUsers() {
    navigation.navigate('Register', {
      screen: 'Settings'
    });
  }

  return (
    <View>
      <Text>Home</Text>
      <Button title="Navigate to Settings" onPress={navigateToUsers} />
    </View>
  );
}
