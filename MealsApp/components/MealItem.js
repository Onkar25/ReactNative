import { Text, View } from "react-native";

function MealItem({ meal }) {
  return <View>
    <Text>
      {meal}
    </Text>
  </View>
}

export default MealItem;