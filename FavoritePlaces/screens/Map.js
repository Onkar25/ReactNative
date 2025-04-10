import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import IconButton from '../components/UI/IconButton';

function Map({ navigation }) {

  const [selectedLocation, setSelectedLocation] = useState();
  const initRegion = {
    latitude: 19.166646,
    longitude: 72.940464,
    latitudeDelta: 0.0932,
    longitudeDelta: 0.450,

  };

  function OnMapClickHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const long = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, long: long });
  }

  const savePickedLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert('Alert', 'No Location Selected');
      return;
    }
    navigation.navigate('AddPlace',
      { pickLat: selectedLocation.lat, pickLong: selectedLocation.long });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintcolor }) => <IconButton iconName='save' size={25} color={tintcolor}
        onPress={savePickedLocation} />
    })
  }, [navigation, savePickedLocation]);
  return (

    <MapView style={styles.map} initialRegion={initRegion} onPress={OnMapClickHandler} >

      {selectedLocation && <Marker coordinate={
        { latitude: selectedLocation.lat, longitude: selectedLocation.long }}
        title='Picked Location' />}
    </MapView>

  );
}

export default Map;


const styles = StyleSheet.create({
  map: {
    flex: 1,
  }
});