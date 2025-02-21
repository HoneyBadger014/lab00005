import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Characters')}>
        <Text style={styles.buttonText}>Heroes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Locations')}>
        <Text style={styles.buttonText}>Locations</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Episodes')}>
        <Text style={styles.buttonText}>Episodes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 70,
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: '#00aa00',
    borderRadius: 5,
    height: 50,
    minHeight: 50,
    width: 300,
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    textAlign:"center",
  },
});
