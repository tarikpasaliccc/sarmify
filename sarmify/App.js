import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MemoryGame from './memory/MemoryGame'; 
import CatcherGame from './sarmaCatcher/catcherGame'; 
import Quiz from './components/Quiz';


const App = () => {
  return (
    <View style={styles.container}>
      <Quiz />
      <MemoryGame /> 
      <CatcherGame />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;
