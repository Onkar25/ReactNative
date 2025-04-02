import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
function IconButton({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="heart" size={24} color='red' />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({

});