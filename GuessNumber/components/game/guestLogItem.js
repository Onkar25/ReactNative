import { StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/Colors";

function GuesLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}> Opponents's Guess : {guess}</Text>
    </View>);
}

export default GuesLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary1,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.secondary1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 5,
    shadowColor: Colors.darkColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  itemText: {
    fontFamily: 'open-sans',
  }
});