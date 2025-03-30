import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({ children, buttonPressed }) {

  // function pressHandler() {
  //   console.log('Pressed');
  // }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={buttonPressed}
        style={({ pressed }) =>
          pressed ?
            [styles.buttonInnerContainer, buttonPressed] : styles.buttonInnerContainer}
        android_ripple={{ color: Colors.secondary1 }}>
        <Text
          style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );

}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: 'hidden',
    margin: 5,
    borderRadius: 10,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary3,
    elevation: 4,
    padding: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.secondary2,
    textAlign: 'center'
  },
  buttonPressed: {
    opacity: 0.5,
  }
});
