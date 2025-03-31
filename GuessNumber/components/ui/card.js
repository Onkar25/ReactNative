import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.primary1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    // this are iOS related
    shadowColor: Colors.darkColor,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.25

  },
});