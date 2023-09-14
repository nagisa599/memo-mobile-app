import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Hello from './src/components/Hello';
import Appbar from './src/components/ AppBar';
import MemoList from './src/components/MemoList';
import CircleButton from './src/components/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList />
      <CircleButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FB',
    // alignItems: 'center', // どこに詰めるか（上下）（例flexendは上）縦方向のコントロール
    // justifyContent: 'center', // どこに詰めるか（左右）（例felexendは右）横方向のコントロール
  },
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
