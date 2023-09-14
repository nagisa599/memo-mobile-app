import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Appbar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appbar: {
    width: '100%', // 幅
    height: 104, // 縦の長さ
    backgroundColor: '#467FD3', // 背景色
    justifyContent: 'flex-end', // 下ぞろえ
  },
  appbarInner: {
    // backgroundColor: 'gray',
    alignItems: 'center', // 左右中央揃え
  },
  appbarRight: {
    position: 'absolute', // ß少し浮いたような感じになる。
    right: 19, // 右から17離れたところ
    bottom: 16, // 下から８はなれたところ
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8, // 下の幅
    fontSize: 22, // 文字の大きさ
    lineHeight: 32, // 調べたらすぐ出てきる。
    color: '#ffffff',
    fontWeight: 'bold', // 文字の太さ
  },
});
