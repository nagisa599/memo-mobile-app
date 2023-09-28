import React from 'react';
import {
  View, StyleSheet, Text, ScrollView,
} from 'react-native';
import Appbar from '../components/ AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={style.container}>
      <Appbar />
      <View style={style.memoHeader}>
        <Text style={style.memoTitle}>買い物リスト</Text>
        <Text style={style.memoDate}>2020年</Text>
      </View>
      <ScrollView style={style.memobody}>
        <Text style={style.memoText}>
          aaaaaaaaßf
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }} name="plus" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontsize: 12,
    lineHeight: 16,
  },
  memobody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontsize: 16,
    lineHeight: 24,
  },


});
