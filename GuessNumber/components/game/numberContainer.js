import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const deviceWidth = Dimensions.get('window').width;
const thresholdWidth = 400;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary1,
    padding: deviceWidth < thresholdWidth ? 12 : 24,
    margin: deviceWidth < thresholdWidth ? 12 : 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.secondary1,
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < thresholdWidth ? 18 : 36,
  },
});