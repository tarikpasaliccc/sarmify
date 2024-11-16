import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MemoryGame from './memory/MemoryGame'; 
import CatcherGame from './sarmaCatcher/catcherGame'; 

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MemoryGame /> 
      <CatcherGame />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
