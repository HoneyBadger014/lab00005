import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default function EpisodesScreen({ navigation }) {
  const [episode, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(data => setEpisodes(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={episode}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
        <TouchableOpacity style={
            styles.episodeButton} onPress={() => navigation.navigate('EpisodeDetail', { episode: item })}>
          <Text style={styles.episodeButtonText}>{item.name}</Text>
        </TouchableOpacity>     
      )}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  episodeButton: {
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
  episodeButtonText: {
    fontSize: 15,
    color: 'white',
  },
});
