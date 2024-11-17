import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/overview/header';

export default function OverviewScreen() {
  const navigation = useNavigation();
  const [selectedGameIndex, setSelectedGameIndex] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);

  const games = [
    { name: 'Quiz', screen: 'Quiz' },
    { name: 'Sarma Catcher', screen: 'CatcherGame' },
    { name: 'Memory Game', screen: 'MemoryGame' },
    { name: 'Shooter Game', screen: 'ShooterGame' },
  ];

  const selectRandomGame = () => {
    setIsSelecting(true);
    setSelectedGameIndex(null); 

    let currentIndex = 0;
    const interval = setInterval(() => {
      setSelectedGameIndex(currentIndex);
      currentIndex = (currentIndex + 1) % games.length;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const randomIndex = Math.floor(Math.random() * games.length);
      setSelectedGameIndex(randomIndex);
      setIsSelecting(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>SARMIFY</Text>

      <View style={styles.mainButtonContainer}>
        <TouchableOpacity
          style={[styles.mainButton, isSelecting && styles.buttonDisabled]}
          onPress={selectRandomGame}
          disabled={isSelecting}
        >
          <Text style={styles.buttonText}>Select a Random Game</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gameList}>
        {games.map((game, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.gameBox,
              selectedGameIndex === index && styles.highlightedBox,
            ]}
            onPress={() => !isSelecting && navigation.navigate(game.screen)}
          >
            <Text style={styles.gameText}>{game.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c6351',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 150,
  },
  mainButtonContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  mainButton: {
    backgroundColor: '#b5d289',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonDisabled: {
    backgroundColor: '#a5d6a7', 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gameList: {
    marginTop: 40,
  },
  gameBox: {
    backgroundColor: '#babf9f',
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  highlightedBox: {
    backgroundColor: '#DAF7A6', 
  },
  gameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
