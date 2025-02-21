import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function LocationDetailScreen({ route }) {
  const { location } = route.params;
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailText}>Name: {location.name}</Text>
      <Text style={styles.detailText}>Type: {location.type}</Text>
      <Text style={styles.detailText}>Dimension: {location.dimension}</Text>
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