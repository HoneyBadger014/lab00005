import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function CharacterDetailScreen({ route }) {
  const { character } = route.params;
  return (
    <View style={styles.detailContainer}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.detailText}>Name: {character.name}</Text>
      <Text style={styles.detailText}>Status: {character.status}</Text>
      <Text style={styles.detailText}>Species: {character.species}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginTop: 5,
  },
  image: {
    width: 250,
    height: 250, 
    borderRadius: 125, 
    borderWidth: 3, 
    borderColor: '#007AFF',
    marginBottom: 15,
  },
  detailText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
});