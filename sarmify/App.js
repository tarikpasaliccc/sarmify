import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MemoryGame from './memory/MemoryGame'; // Importiere die MemoryGame-Komponente

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MemoryGame /> {/* Rendern des Memory-Spiels */}
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
