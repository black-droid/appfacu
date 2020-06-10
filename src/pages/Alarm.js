import React, { useState }  from 'react';
import { View, Button, Alert, Picker, Text, TextInput } from 'react-native';



export default function AlarmScreen () {

    function mascaraData( campo, e ){
        var kC = (document.all) ? event.keyCode : e.keyCode;
        var data = campo.value;	
        if( kC!=8 && kC!=46 )	{
            if( data.length==2 ) {
                campo.value = data += '/';
            }
            else if( data.length==5 )	{
                campo.value = data += '/';
            } else 
            campo.value = data;
        }
    }
    
    {/* <html>
    <head>
    <title>Mascara data formulario</title>
    
    </head>
    <body>
        <form>
            <input type="text" name="outra_data" id="outra_data" maxlength="10" onkeypress="mascaraData( this, event )" />
        </form>
    
    </body>
    </html>
     */}



     

const[dia,setDia]=useState('')

  return(

    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

        <Text> AlarmScreen </Text>
        <TextInput
        placeholder='Data'
        
        onChangeText={(campo)=>setDia(campo)}/>

        <Text>d</Text>
        
 
    </View>
  )
};

