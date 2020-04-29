import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Register from './pages/register';

import Drout from './Drawer';
import HomeScreen from './pages/Home';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} options = {{ title:false, headerTransparent: true }}/>
				<Stack.Screen name="Register" component={Register} options = {{ title:false, headerTransparent: true }}/>
        <Stack.Screen name="Drawer" component={Drout} options = {{ title:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
