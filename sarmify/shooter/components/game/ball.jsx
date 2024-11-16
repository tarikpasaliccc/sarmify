// Ball.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Ball = ({ position }) => {
  return (
    <View style={[styles.ball, { top: position.y, left: position.x }]} />
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 20, // size of the ball
    height: 20,
    borderRadius: 10, // makes it circular
    backgroundColor: 'red', // you can customize the color later
    position: 'absolute',
  },
});

export default Ball;
