import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import LoginScreen from './pages/Login';
import RegisterScreen from './pages/Register';
import CountScreen from './pages/Count';
import HomeScreen from './pages/Home';
import QRCodeScreen from './pages/QRCode';
import ScheduleScreen from './pages/Schedule';

StatusBar.setBackgroundColor("#06a");
StatusBar.setBarStyle("light-content");



const Tab = createBottomTabNavigator();
//criaçao do tab button com controle de telas e rotas
export function TabButton() {
  return (
      <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions={{          
          activeTintColor: "#f20",
          inactiveTintColor: "#fff",
          showIcon: true,
          showLabel: true,
          labelPosition: "below-icon",
          labelStyle: {
          fontSize: 12,
        },
        style:{
          backgroundColor: "#06a"
        },
        }}>

        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            title: "INICIO",
            tabBarIcon: ({color, size}) => 
            (<Icon name="home" size={25} color={color} />),
          }}/>
        <Tab.Screen name="Count" component={CountScreen}
          options={{
            title: "PERFIL",
            tabBarIcon: ({color, size}) => 
            (<Icon name="account" size={25} color={color} />)        
          }}/>
        <Tab.Screen name="QRCode" component={QRCodeScreen}
          options={{
            title: "QRCODE",
            tabBarIcon: ({color, size}) => 
            (<Icon name="qrcode" size={25} color={color} />)        
          }}/>
        <Tab.Screen name="Schedule" component={ScheduleScreen}
          options={{
            title: "AGENDA",
            tabBarIcon: ({color, size}) => 
            (<Icon name="calendar-clock" size={25} color={color} />)        
          }}/>
      </Tab.Navigator>
  );
}


const Stack = createStackNavigator();
//Controle de rotas para navegação
//chamo o tabbutton para definir ele como "componente controle " das telas q n usam o stack
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: '#fff',
          headerPressColorAndroid: '#fa0',
          gestureEnabled: false,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

        }}>
        <Stack.Screen name="Login" component={LoginScreen} 
          options = {{ 
            title: false,
            headerTransparent: true,
          }}/>
        <Stack.Screen name="Register" component={RegisterScreen}
          options = {{ 
            title:"CADASTRO",
            headerStyle: {
              height: 80,
              backgroundColor: '#07a',          
              },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="Tab" component={TabButton}
          options = {{ 
            title: false,
            headerTransparent: true,
          }}/>                  
      </Stack.Navigator>
    </NavigationContainer>
  );
}





