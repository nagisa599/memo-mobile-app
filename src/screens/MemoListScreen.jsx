import React from 'react';
import { View, StyleSheet } from 'react-native';
import Appbar from '../components/ AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList />
      <CircleButton name="plus" />
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
});
