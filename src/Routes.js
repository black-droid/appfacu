import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,  DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';

import Login from './pages/Login';
import Register from './pages/register';
import Home from './pages/Home';
import NotificationsScreen from './pages/Notifications';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} options = {{ title:false, headerTransparent: true }}/>
				<Stack.Screen name="Register" component={Register} options = {{ title:false, headerTransparent: true }}/>
      </Stack.Navigator>

    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} options = {{ title:false }} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
