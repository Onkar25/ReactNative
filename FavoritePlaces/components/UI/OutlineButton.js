import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Colors } from "../../constants/colors";
function OutlineButton({ onPress, iconName, children }) {
  return (
    <Pressable onPress={onPress}
      style={(pressed) => [styles.buttton, pressed && styles.pressed]}>
      <Ionicons name={iconName} size={18} color={Colors.primary800} style={styles.icon} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default OutlineButton;


const styles = StyleSheet.create({
  buttton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 6,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary500,
    flexDirection: 'row'
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary100,
    fontSize: 16
  }
});