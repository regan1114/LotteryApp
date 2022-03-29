import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  Alert,
  Keyboard
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/store/hooks'
import { addLotteryArray, cleanLotteryArray, cleanWinNumberArray } from '../redux/actions/ActionCreators';

function SettingsScreen() {
  const [startNumber, setStartNumber] = useState<string>();
  const [endNumber, setEndNumber] = useState<string>();
  
  const dispatch = useDispatch();

  const setRandomRange = () => {
    if (!isInteger(startNumber) || !isInteger(endNumber)) {
      Alert.alert('起始值不得大於等於結束值');
      return;
    }
    const start = Number(startNumber);
    const end = Number(endNumber);
    if (start >= end) {
      Alert.alert('起始值不得大於等於結束值');
      return;
    }
    clearArray();
    for (let i = start; i <= end; i++) {
      dispatch(addLotteryArray(i))
    }
    Alert.alert("設定完成 :)");
  };
  const clearArray = () => {
    dispatch(cleanLotteryArray())
    dispatch(cleanWinNumberArray())
    Keyboard.dismiss();
  };

  const isInteger = (n: any) => {
    return n % 1 === 0
  }
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setStartNumber(value)}
          placeholder="起始數字"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setEndNumber(value)}
          placeholder="結尾數字"
          keyboardType="numeric"
        />
        <Button title="設定抽獎號碼範圍" onPress={setRandomRange} />
        <Button title="清空範圍" onPress={clearArray} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SettingsScreen;