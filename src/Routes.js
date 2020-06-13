import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { LoginScreen } from './pages/Login';
import UserOrCaregiverScreen from './pages/UserOrCaregiver';
import RegisterScreen from './pages/Register';
import CaregiverScreen from './pages/Caregiver';
import HomeScreen from './pages/Home';
import ScheduleScreen from './pages/Schedule';
import HistoricScreen from './pages/Historic';
import QRCodeScreen from './pages/QRCode';
import TransportScreen from './pages/Transport';
import EditScreen from './pages/Edit';
import EditCaregiverScreen from './pages/EditCaregiver';
import CountScreen from './pages/Count';
import AlarmScreen from './pages/Alarm';
import MessageScreen from './pages/Message';

StatusBar.setBackgroundColor("#06a");
StatusBar.setBarStyle("light-content");

const Tab = createBottomTabNavigator();
//criaçao do tab button com controle de telas e rotas
export function TabButton() {
  return (
      <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions={{          
          activeTintColor: "#006",
          inactiveTintColor: "#fff",
          showIcon: true,
          showLabel: true,
          labelPosition: "below-icon",
          labelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        style:{
          backgroundColor: "#06a",
          height: 60,    
        },
        }}>

        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            title: "INICIO",
            tabBarIcon: ({color, size}) => 
            (<Icon name="home" size={40} color={color} />),
          }}/>
       <Tab.Screen name="Alarm" component={AlarmScreen}
          options={{
            title: "ALARME",
            tabBarIcon: ({color, size}) => 
            (<Icon name="alarm" size={40} color={color} />)        
          }}/>
        <Tab.Screen name="Message" component={MessageScreen}
          options={{
            title: "AVISOS",
            tabBarIcon: ({color, size}) => 
            (<Icon name="bell" size={40} color={color} />)        
          }}/>
        <Tab.Screen name="Count" component={CountScreen}
          options={{
            title: "PERFIL",
            tabBarIcon: ({color, size}) => 
            (<Icon name="account" size={40} color={color} />)        
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
          headerPressColorAndroid: '#f00',
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}>
        <Stack.Screen name="Tab" component={TabButton}
          options = {{
            headerShown: false,
          }}/>     
        <Stack.Screen name="Login" component={LoginScreen} 
          options = {{
            headerShown: false,
          }}/>
        <Stack.Screen name="UserOrCaregiver" component={UserOrCaregiverScreen}
          options = {{ 
            title:"CUIDADOR / USUÁRIO",
            headerTitleAllowFontScaling: true,
            headerStyle: {
              height: 80,
              backgroundColor: '#07a',          
              },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="Register" component={RegisterScreen}
          options = {{ 
            title:"CADASTRO",
            headerLeft: null,
            headerStyle: {
              height: 80,
              backgroundColor: '#07a',          
              },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="Caregiver" component={CaregiverScreen}
          options = {{ 
            title:"CADASTRO",
            headerLeft: null,
            headerStyle: {
              height: 80,
              backgroundColor: '#07a',          
              },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="Schedule" component={ScheduleScreen}
          options = {{ 
            title:"AGENDA",
            headerStyle: {
              height: 80,
              backgroundColor: '#07a',          
              },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="Historic" component={HistoricScreen}
          options = {{ 
            title:"HISTÓRICO DE CONSULTAS",
            headerStyle: {
              height: 80,
              backgroundColor: '#07a',          
              },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="QRCode" component={QRCodeScreen}
          options = {{ 
            title:"QRCODE",
            headerStyle: {
              height: 80,
              backgroundColor: '#07a',          
              },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="Transport" component={TransportScreen}
          options = {{ 
            title:"TRANSPORTE",
            headerStyle: {
              height: 80,
              backgroundColor: '#07a',          
              },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="Edit" component={EditScreen}
          options = {{ 
            title:"EDITAR CADASTRO",
            headerStyle: {
              height: 80,
              backgroundColor: '#07a',          
              },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="EditCaregiver" component={EditCaregiverScreen}
          options = {{ 
            title:"EDITAR CADASTRO",
            headerStyle: {
              height: 80,
              backgroundColor: '#07a',          
              },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




