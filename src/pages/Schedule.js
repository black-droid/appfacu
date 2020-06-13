import React, { useState } from 'react';
import { StyleSheet, ScrollView , Text, View, SafeAreaView } from 'react-native';

import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



export default function ScheduleScreen({ navigation }) {
  const[date,setDate]=useState('')
  const[hour,setHour]=useState()
  return (
    <SafeAreaView style={styles.container}>     
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
    </SafeAreaView>

    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"

    },
    component: {
      width: "80%",

  
  
    },
  })


