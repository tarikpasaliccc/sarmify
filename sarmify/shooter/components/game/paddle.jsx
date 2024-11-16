// Paddle.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Paddle = ({ position }) => {
  return (
    <View style={[styles.paddle, { left: position.x }]} />
  );
};

const styles = StyleSheet.create({
  paddle: {
    position: 'absolute',
    bottom: 30, // adjust this based on how close you want it to the bottom of the screen
    width: 100, // width of the paddle
    height: 20, // height of the paddle
    backgroundColor: 'black', // you can customize the color later
  },
});

export default Paddle;
