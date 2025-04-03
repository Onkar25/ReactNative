import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
function IconButton({ onPress, name, color, size }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({

});