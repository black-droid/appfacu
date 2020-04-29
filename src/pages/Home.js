import React from 'react';
import { View, Text, Button,TouchableOpacity, TextInput } from 'react-native';



export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Text>Home Screen</Text>
    </View>
  );
}
