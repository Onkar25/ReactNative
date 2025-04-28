import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
function IconButton({ onPress, iconName, size, color }) {
  return (
    <Pressable onPress={onPress}
      style={(pressed) => [styles.buttton, pressed && styles.pressed]}>
      <Ionicons name={iconName} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;


const styles = StyleSheet.create({

  buttton: {
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressed: {
    opacity: 0.7,
  }
});