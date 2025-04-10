import { Alert, Button, Image, StyleSheet, View, Text } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from "react";
import { Colors } from "../../constants/colors";
import OutlineButton from "../UI/OutlineButton";
function ImagePicker({ onImageTaken }) {
  const [cameraPermission, requestPermission] = useCameraPermissions();
  const [captureImage, setCaptureImage] = useState();

  async function verifyPermission() {
    if (cameraPermission.status === PermissionStatus.UNDETERMINED) {
      const responsePermission = await requestPermission();
      return responsePermission.granted;
    }

    if (cameraPermission.status === PermissionStatus.DENIED) {
      Alert.alert('Warning', 'Insufficient Permission for camera');
      return false;
    }
    return true;
  }
  async function capturePhoto() {

    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    try {

      const photo = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });

      setCaptureImage(photo.assets.at(0).uri);
      onImageTaken(photo.assets.at(0).uri);
    } catch (error) {

    }
  }

  let imagePreview = <Text style={styles.text}> No image found !!! </Text>;
  if (captureImage) {
    imagePreview = <Image style={styles.image} source={{ uri: captureImage }} />
  }
  return (

    <View>
      <View style={styles.imagePreview} >
        {
          imagePreview
        }
      </View>
      {/* <Button title="Take Image" onPress={capturePhoto} /> */}
      <OutlineButton onPress={capturePhoto} iconName='camera'>Take Image</OutlineButton>
    </View>
  );
}


export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {

    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 16
  }
});