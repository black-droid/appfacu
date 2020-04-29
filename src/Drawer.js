import * as React from 'react';
import { Button, View } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import NotificationsScreen from './pages/Notifications';
import HomeScreen from './pages/Home';

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
  }
  

const Drawer = createDrawerNavigator();

function Drout() {
  return (

      <Drawer.Navigator initialRouteName = 'Home'>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>

  );
}

export default Drout;