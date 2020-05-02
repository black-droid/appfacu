import React from 'react';
import { View, Text, Button,TouchableOpacity, TextInput,SafeAreaView } from 'react-native';



export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}
