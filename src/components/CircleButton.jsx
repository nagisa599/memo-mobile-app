import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function CircleButton() {
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>+</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467fD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000', // iosで影をつける方法
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8, // andoroidで影をつける方法
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
