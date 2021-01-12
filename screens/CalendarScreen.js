import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import Table from '../components/Table';
import CalendarPicker from 'react-native-calendar-picker';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function CalendarScreen3() {

const user = useSelector(state => state.user);
const stringreminder = "12";

const myDate = new Date();	// 今日の日付データ取得
const myWeekTbl = new Array("日","月","火","水","木","金","土");	// 曜日テーブル定義
const myMonthTbl = new Array(31,28,31,30,31,30,31,31,30,31,30,31);	// 月テーブル定義
const myYear = myDate.getFullYear();	// 年を取得
const aaa = ((2020%4) == 0) ? 29:28; //あとで修正
const myMonth = myDate.getMonth();	// 月を取得(0月～11月)
const myToday = myDate.getDate();	// 今日の'日'を退避
//const myDate.setDate(1);	// 日付を'１日'に変えて、
const myWeek = myDate.getDay();	// 　'１日'の曜日を取得
const weekdays=['日','月','火','水','木','金','土'];
const months=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
const customDatesStylesFunc = date => {
  if (date.isoWeekday() == 2 || date.isoWeekday() == 5) { // Fridays
    return {
      style: {backgroundColor: '#FF3F3F'},
      textStyle: {fontWeight: 'bold', color: '#fff'},
      containerStyle: [], // extra styling for day container
    }
  }else if(date.isoWeekday() == 3)
    return {
      style: {backgroundColor: '#4485FF'},
      textStyle: {fontWeight: 'bold', color: '#fff'},
      containerStyle: [], // extra styling for day container
    }
}

return (
  <View style={styles.container}>
    <Text/>
    <CalendarPicker
      weekdays={weekdays}
      months={months}
      customDatesStyles={customDatesStylesFunc}
      todayBackgroundColor="#FDEBD0"
      selectedDayColor='transparent'
    />
    <Text/>
    <Text style={styles.textRed}>※赤色（火・金）は燃えるゴミの日です。</Text>
    <Text style={styles.textBlue}>※青色（水）はプラスチックの日です。</Text>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: '#fff',
  },
  textRed: {
    fontSize:16,
    fontWeight:'bold',
    color:'red',
  },
  textBlue: {
    fontSize:16,
    fontWeight:'bold',
    color:'#4485FF',
  },
});
