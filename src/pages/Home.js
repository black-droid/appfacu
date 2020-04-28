import React from 'react';
import { View, Text, Button,TouchableOpacity, TextInput } from 'react-native';

// import { Container } from './styles';

export default function Home({ navigation }) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}