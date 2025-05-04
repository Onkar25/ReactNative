import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { dbInit, insertPlace, updatePlace, deleteAllPlaces, deletePlaceById, fetchAllPlaces, initializeDatabase } from './utils/Database';
import FlyoutDrawer from './screens/FlyoutDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddTask from './screens/DailyTask/AddTask';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateTaskTable } from './repository/TaskRepository';


const Stack = createNativeStackNavigator();
export default function App() {
  // useEffect(() => {
  //   async function initializeApp() {
  //     try {
  //       console.log('App.js Logs');
  //       await CreateTaskTable();
  //       // await dbInit();
  //       // // Example place to insert
  //       // const examplePlace = {
  //       //   title: 'Central Park',
  //       //   imageUrl: 'https://example.com/central-park.jpg',
  //       //   address: 'New York, NY',
  //       //   location: {
  //       //     lat: 40.785091,
  //       //     lng: -73.968285
  //       //   }
  //       // };

  //       // await insertPlace(examplePlace);

  //       // const places = await fetchAllPlaces();
  //       // console.log(places);

  //       // const updatedPlace = {
  //       //   title: "Lalbaug",
  //       //   imageUrl: "https://example.com/central-park.jpg",
  //       //   address: "Kalachowki",
  //       //   location: {
  //       //     lat: 40.785091,
  //       //     lng: -73.968285
  //       //   }
  //       // };

  //       // await updatePlace(places[0].id, updatedPlace);


  //       // await deleteAllPlaces();

  //       // console.log(places[0]);
  //       // await deletePlaceById(places[0].id);

  //       // const places2 = await fetchAllPlaces();
  //       // console.log(places2);


  //     } catch (error) {
  //       console.error("Initialization error:", error);
  //     }
  //   }

  //   initializeApp();
  // }, []);
  // async function init() {
  //   await initializeDatabase();
  //   await CreateTaskTable();
  // }
  // useEffect(() => {
  //   init();
  // }, []);
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={FlyoutDrawer} options={{ headerShown: false }} />
          <Stack.Screen name="AddTask" component={AddTask} options={{ title: 'Add Task' }} />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );



}

