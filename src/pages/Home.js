import React, { useState } from 'react';
import { View, Text, StyleSheet ,Button,TouchableOpacity, TextInput,SafeAreaView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



export default function HomeScreen({ navigation }) {
  const[date,setDate]=useState('')
  const[hour,setHour]=useState()

  return (
      <View style={styles.container}>
        
        <DatePicker style={styles.component}
          format="DD/MM/YYYY"
          date={date}
          mode={"date"}
          is24Hour={true}
          showIcon={true}
          iconComponent={<Icon name='calendar-multiselect' size={30} color='#333333'/>}
          placeholder="Escolha uma data "
          onDateChange={(value)=>{setDate(value)}}
        />
        <Text style={styles.component}>
          {date && <Text>Data selecionada: {date} </Text>}
        </Text>

        <DatePicker style={styles.component}
          date={hour}
          mode={"time"}
          showIcon={true}
          iconComponent={<Icon name='clock-outline' size={30} color='#333333'/>}
          placeholder="Escolha um horário "          
          onDateChange={(value)=>{setHour(value)}}
        />
        <Text style={styles.component}>
          {hour && <Text>Horário selecionada: {hour} </Text>}
        </Text>
      </View>



  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  component: {
    width: "80%",
    marginVertical: 10,

  }

})


