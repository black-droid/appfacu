import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Register from './pages/register';
import Home from './pages/Home';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
				<Stack.Screen name="Login" component={Login} options = {{ title:false, headerTransparent: true }}/>
				<Stack.Screen name="Register" component={Register} options = {{ title:false, headerTransparent: true }}/>
				<Stack.Screen name="Home" component={Home} options = {{ title:false, headerTransparent: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
