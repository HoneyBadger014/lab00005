import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default function CharactersScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={characters}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
        <TouchableOpacity style={
            styles.characterButton} onPress={() => navigation.navigate('CharacterDetail', { character: item })}>
          <Text style={styles.characterButtonText}>{item.name}</Text>
        </TouchableOpacity>     
      )}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  characterButton: {
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
  characterButtonText: {
    fontSize: 15,
    color: 'white',
  },
});
