import React from 'react';
import { View, Text, Button,TouchableOpacity, TextInput,SafeAreaView } from 'react-native';
import { HeaderTitle } from '@react-navigation/stack';

export default function ScheduleScreen({ navigation }) {

  LocaleConfig.defaultLocale = 'fr';
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Schedule Screen</Text>
      </View>

  );
}
