import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlaces';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';
import Map from './screens/Map';
import { useEffect, useState } from 'react';
import { dbInit } from './util/database';

const Stack = createNativeStackNavigator();

export default function App() {
  // const [dbInitializeed, setDbInitialized] = useState(false);
  useEffect(() => {
    async function initializeApp() {
      try {
        await dbInit();
        console.log("Database and table are ready");

        // Example place to insert
        const examplePlace = {
          title: "Central Park",
          imageUrl: "https://example.com/central-park.jpg",
          address: "New York, NY",
          location: {
            lat: 40.785091,
            lng: -73.968285
          }
        };

        await insertPlace(examplePlace);
        console.log("Place inserted successfully!");
      } catch (error) {
        console.error("Initialization error:", error);
      }
    }

    initializeApp();
  }, []);

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          tintColor: Colors.gray700,
          contentStyle: {
            backgroundColor: Colors.gray700
          }
        }}>
          <Stack.Screen name='AllPlaces' component={AllPlaces} options={
            ({ navigation }) => ({
              title: 'All Places ',
              headerRight: ({ tintColor }) => <IconButton iconName='add'
                color={tintColor} size={24} onPress={() => {
                  navigation.navigate('AddPlace')
                }} />
            })}
          />
          <Stack.Screen name='AddPlace' component={AddPlace} options={{ title: 'Add Place' }} />
          <Stack.Screen name='Map' component={Map} options={{ title: 'Map' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
