import { Button, Image, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from "expo-location";
import { useEffect, useState } from "react";
import { getAddress, getMapPrevew } from "../../util/location";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";

function LocationPicker({ onLocationTaken }) {

  const [pickedLocation, setPickedLocation] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  const [locationPermission, requestPermission] = useForegroundPermissions();

  const isFocused = useIsFocused();

  useEffect(() => {
    async function handleLocation() {

      if (pickedLocation) {
        const address = await getAddress(pickedLocation.lat, pickedLocation.long);
        onLocationTaken({ ...pickedLocation, address: address });
      }


    }

    handleLocation();
  }, [pickedLocation, onLocationTaken]);

  useEffect(() => {
    if (isFocused && route.params) {
      const mapLocation = route.params &&
        { lat: route.params.pickLat, long: route.params.pickLong };

      setPickedLocation(mapLocation);
    }
  }, [route, isFocused]);

  async function verifyPermission() {
    if (locationPermission.status === PermissionStatus.UNDETERMINED) {
      const responsePermission = await requestPermission();
      return responsePermission.granted;
    }

    if (locationPermission.status === PermissionStatus.DENIED) {
      Alert.alert('Warning', 'Insufficient Permission for Location');
      return false;
    }
    return true;
  }

  async function getLocation() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation(
      {
        lat: location.coords.latitude,
        long: location.coords.longitude
      });

  }

  function pickOnMap() {
    navigation.navigate('Map');
  }

  let locationPreview = <Text> No location picked yet .</Text>;

  if (pickedLocation) {
    locationPreview = <Image style={styles.image} source={{ uri: getMapPrevew(pickedLocation.lat, pickedLocation.long) }} />;
  }

  return (
    <View >
      <View style={styles.mapPreview}>
        {locationPreview}
      </View>
      <View style={styles.actions}>
        <OutlineButton iconName='location' onPress={getLocation} >Locate User</OutlineButton>
        <OutlineButton iconName='map' onPress={pickOnMap} >Pick on Map</OutlineButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: 'hidden'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  }
});