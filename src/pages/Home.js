import React from 'react';
import { View, Text, Button,TouchableOpacity, TextInput } from 'react-native';

// import { Container } from './styles';

export default function Home({ navigation }) {
  function navigateToUsers() {
    navigation.navigate('Login');
  }

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity title="Navigate to Users" onPress={navigateToUsers}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}
