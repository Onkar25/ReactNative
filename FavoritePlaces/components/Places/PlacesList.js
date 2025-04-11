import { FlatList, StyleSheet, View, Text } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

function PlacesList({ places }) {

  if (!places || places.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> No Place Found !!! </Text>
      </View>
    );
  }
  return <FlatList
    data={places}
    renderItem={({ item }) => <PlaceItem place={item} />}
    keyExtractor={(item) => item.id} style={styles.placeList} />
}

export default PlacesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.primary200,
  },
  placeList: {
    margin: 20,
  }
});