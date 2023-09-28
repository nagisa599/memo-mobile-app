import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memolistItem}>
        <View>
          <Text style={styles.memolistItemTitles}>買い物リストw</Text>
          <Text style={styles.memoListItemDate}>2023年5月10日</Text>
        </View>
        <View>
          <Feather name="x" size={32} color="black" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  memolistItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row', // 通常、縦並びになるものを横並びにする。
    justifyContent: 'space-between', // 横並びになっているものの真ん中に余白を開ける。
    paddingVertical: 16, // 縦の余白
    paddingHorizontal: 19, // 横の余白
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memolistItemTitles: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
