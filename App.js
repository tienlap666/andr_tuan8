import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bai1 from './allBai/bai1'
import Bai2 from './allBai/bai2'
import Bai3 from './allBai/bai3'


export default function App() {
  return (
    <View >
      <Bai1 />
      {/* <Bai2 /> */}
      {/* <Bai3 /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
