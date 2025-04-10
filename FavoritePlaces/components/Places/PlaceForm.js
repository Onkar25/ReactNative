import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { Place } from "../../models/places";


function PlaceForm({ onCreatePlace }) {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [pickLocation, setPickedLocation] = useState();
  const [pickImage, setPickedImage] = useState();
  function onTextChangeHandler(title) {

    setEnteredTitle(title);
  }
  const LocationTakenHandler = useCallback((location) => {
    setPickedLocation(location);

  }, []);

  function ImageTakenHandler(imageUri) {
    setPickedImage(imageUri);
  }
  function SavePlaceHandler() {
    const placeData = new Place(enteredTitle, pickImage, pickLocation);
    onCreatePlace(placeData);
  }
  return (
    <ScrollView style={styles.form}>
      <View >
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={onTextChangeHandler} value={enteredTitle} />
      </View>
      <ImagePicker onImageTaken={ImageTakenHandler} />
      <LocationPicker onLocationTaken={LocationTakenHandler} />
      <Button onPress={SavePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 26
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100
  }
});