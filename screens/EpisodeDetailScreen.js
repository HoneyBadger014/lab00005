import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function EpisodeDetailScreen({ route }) {
  const { episode } = route.params;
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailText}>Name: {episode.name}</Text>
      <Text style={styles.detailText}>Episode: {episode.episode}</Text>
      <Text style={styles.detailText}>Air_date: {episode.air_date}</Text>
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
  detailText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    textAlign:'center',
  },
});