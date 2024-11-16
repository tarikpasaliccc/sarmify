import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default function GridButton({ image, label, onPress, style, imageWidth, imageHeight }) {
  return (
    <TouchableOpacity style={[styles.box, style]} onPress={onPress}>
      <Image source={image} style={[styles.icon, {height: imageHeight, width: imageWidth}]} />
      <Text style={styles.boxText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '45%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  icon: {
    position: 'absolute',
    top: 20,
  },
  boxText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
});
