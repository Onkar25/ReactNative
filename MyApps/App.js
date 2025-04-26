import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { dbInit, insertPlace, updatePlace, deleteAllPlaces, deletePlaceById, fetchAllPlaces } from './utils/Database';

export default function App() {

  useEffect(() => {
    async function initializeApp() {
      try {
        await dbInit();
        // Example place to insert
        const examplePlace = {
          title: 'Central Park',
          imageUrl: 'https://example.com/central-park.jpg',
          address: 'New York, NY',
          location: {
            lat: 40.785091,
            lng: -73.968285
          }
        };

        // await insertPlace(examplePlace);

        const places = await fetchAllPlaces();
        console.log(places);

        const updatedPlace = {
          title: "Lalbaug",
          imageUrl: "https://example.com/central-park.jpg",
          address: "Kalachowki",
          location: {
            lat: 40.785091,
            lng: -73.968285
          }
        };

        // await updatePlace(places[0].id, updatedPlace);


        // await deleteAllPlaces();

        // console.log(places[0]);
        // await deletePlaceById(places[0].id);

        const places2 = await fetchAllPlaces();
        console.log(places2);


      } catch (error) {
        console.error("Initialization error:", error);
      }
    }

    initializeApp();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});