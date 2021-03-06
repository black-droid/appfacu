import React from 'react';
import { StyleSheet, ScrollView , Text, View, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView from 'react-native-maps';

export default function TransportScreen({ navigation }) {
  return (

    <SafeAreaView style={{flex: 1}}>
    <MapView style={{height: 300,}}
      region = {{
        latitude: -23.654502,
        longitude: -46.576482,
        latitudeDelta: 0.0092,
        longitudeDelta: 0.0041,
      } }
      showsUserLocation={true}
      loadingEnabled={true}
     // onRegionChange={}
    />

    <GooglePlacesAutocomplete
      placeholder = ' Procurar'
      query={{
        key: 'AIzaSyC56BdFfEWMqYh8wmtlZIu0TLqRFOXmRFo',
        language: 'pt', // language of the results
        types: '(cities)' // default: 'geocode'
      }}
      styles={{
        textInputContainer: {
          width: '100%',
          position: "absolute"            
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
    />
  </SafeAreaView>

  );
}
