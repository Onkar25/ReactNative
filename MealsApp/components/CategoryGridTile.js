import { Pressable, StyleSheet, View, Text, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';

function CategoryGridTile({ title, color, onPress }) {
  const colorStyle = {
    backgroundColor: { color },
  }
  // Alternative for Navigation
  // const navigation = useNavigation();
  // function OnPressHandler() {
  //   navigation.navigate('MealOverview');
  // }

  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.buttonStyle,
        pressed ? styles.buttonRipple : null
        ]}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View >
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 6,
    elevation: 3,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonStyle: {
    flex: 1,
  },
  buttonRipple: {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14
  }
});