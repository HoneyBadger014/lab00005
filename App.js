import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CharactersScreen from './screens/CharactersScreen';
import CharacterDetailScreen from './screens/CharacterDetailScreen';
import LocationsScreen from './screens/LocationsScreen';
import LocationDetailScreen from './screens/LocationDetailScreen';
import EpisodesScreen from './screens/EpisodesScreen';
import EpisodeDetailScreen from './screens/EpisodeDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerStyle: {  
            backgroundColor: '#00aa00',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        >
        <Stack.Screen name="Rick and Morty" component={HomeScreen} />
        <Stack.Screen name="Characters" component={CharactersScreen} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
        <Stack.Screen name="Locations" component={LocationsScreen} />
        <Stack.Screen name="LocationDetail" component={LocationDetailScreen} />
        <Stack.Screen name="Episodes" component={EpisodesScreen} />
        <Stack.Screen name="EpisodeDetail" component={EpisodeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
