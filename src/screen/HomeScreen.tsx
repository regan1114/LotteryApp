import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Button,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import {useAppSelector} from '../redux/store/hooks';
import {resetLotteryNumberArray, addWinNumberArray} from '../redux/actions/ActionCreators';

function HomeScreen(){
  const dispatch = useDispatch();
  const [numberHolder, setNumberHolder] = useState<number>(0);
  const {winNumberList, lotteryNumberList} = useAppSelector(state => state.lottery)
  
  const generateRandomNumber = () => {
    
    if (lotteryNumberList.length === 0 && winNumberList.length > 0) {
      showAlertView('溫馨提醒','抽獎結束囉！');
      return;
    }
    if (lotteryNumberList.length === 0) {
      showAlertView('溫馨提醒','請先設定抽獎範圍!');
      return;
    }
    const randomNumber = Math.floor(Math.random() * lotteryNumberList.length);
    const lotteryNumber = lotteryNumberList[randomNumber];
    lotteryNumberList.splice(randomNumber, 1);
    
    setNumberHolder(lotteryNumber | 0);
    dispatch(resetLotteryNumberArray(lotteryNumberList));
    dispatch(addWinNumberArray(lotteryNumber | 0))
  };

  const showLuckyNumber = () =>{
    const title = '中獎號碼';
    const luckyNumberString = winNumberList.join();
    showAlertView(title, luckyNumberString);
  }

  const showAlertView = (title:string, message:string) => {
    setNumberHolder(0);
    const msg = message;
    Alert.alert(title,msg);
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>{numberHolder}</Text>
      
      <TouchableOpacity
          style={styles.buttonStyle}
          onPress={generateRandomNumber}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/wheel.png')}
            style={styles.buttonImageIconStyle}
          />
      </TouchableOpacity>
      {
          !!winNumberList.length &&
          <Button title="顯示中獎號碼" onPress={showLuckyNumber} />
      }
    </View>
  );
};

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
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});

export default HomeScreen;