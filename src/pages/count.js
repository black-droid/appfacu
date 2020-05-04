import React from 'react';
import { View, Text, Button,TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

// import { Container } from './styles';

export default function CountScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Count Screen</Text>
      </View>
    </SafeAreaView>
  );
}
