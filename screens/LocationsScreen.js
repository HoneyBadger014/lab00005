import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default function LocationsScreen({ navigation }) {
  const [location, setLocations] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location')
      .then(response => response.json())
      .then(data => setLocations(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={location}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
        <TouchableOpacity style={
            styles.locationButton} onPress={() => navigation.navigate('LocationDetail', { location: item })}>
          <Text style={styles.locationButtonText}>{item.name}</Text>
        </TouchableOpacity>     
      )}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  locationButton: {
    marginTop: 20,
    flex:1 ,
    padding: 10,
    backgroundColor: '#00aa00',
    borderRadius: 5,
    marginVertical: 7,
    height: 50,
    width: 300,
    marginLeft:"auto",
    marginRight:"auto",
  },
  locationButtonText: {
    fontSize: 15,
    color: 'white',
  },
});
