import { StyleSheet, Text, View } from 'react-native';
import Main from '../main';

export default function Title() {
  return (
    <View>
        <Text style={styles.container}>Imc Calc*</Text>
        <Main></Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20
  },
});