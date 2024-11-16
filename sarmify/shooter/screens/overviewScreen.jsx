import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/overview/header';
import GridButton from '../components/overview/gridButton';
import ProfileModal from '../components/overview/profileModal';

export default function OverviewScreen() {
  const navigation = useNavigation();
  const [isProfileVisible, setProfileVisible] = useState(false);


  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header onProfilePress={() => setProfileVisible(true)} />
      </SafeAreaView>

      <Text style={styles.title}>SARMIFY</Text>

      <View style={styles.gridContainer}>
        <GridButton
          image={require('../../assets/quiz.png')}
          label="Quiz"
          onPress={() => navigation.navigate('Quiz')}
          style={styles.box1}
        />
        <GridButton
          image={require('../../assets/sarma.png')}
          label="Sarma Catcher"
          onPress={() => navigation.navigate('CatcherGame')}
          style={styles.box2}
        />
        <GridButton
          image={require('../../assets/sarma.png')}
          label="Memory Game"
          onPress={() => navigation.navigate('MemoryGame')}
          style={styles.box3}
        />
        <GridButton
          image={require('../../assets/sarma.png')}
          label="Shooter Game"
          onPress={() => navigation.navigate('ShooterGame')}
          style={styles.box4}
        />
      </View>

      <ProfileModal visible={isProfileVisible} onClose={() => setProfileVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dffcbc',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',  
    alignItems: 'center',
    marginTop: 100,
  },
  box1: {
    backgroundColor: '#f6fcbc',
  },
  box2: {
    backgroundColor: '#c0e8f6',
  },
  box3: {
    backgroundColor: '#f7d9c4',
  },
  box4: {
    backgroundColor: '#f9cf9c',
  },
});

