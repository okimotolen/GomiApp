import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function ReminderScreen() {

const myDate = new Date();	// 今日の日付データ取得
const myWeekTbl = new Array("日","月","火","水","木","金","土");	// 曜日テーブル定義
const myMonthTbl = new Array(31,28,31,30,31,30,31,31,30,31,30,31);	// 月テーブル定義
const myYear = myDate.getFullYear();	// 年を取得
const aaa = ((2020%4) == 0) ? 29:28; //あとで修正
const myMonth = myDate.getMonth();	// 月を取得(0月～11月)
const myToday = myDate.getDate();	// 今日の'日'を退避
//const myDate.setDate(1);	// 日付を'１日'に変えて、
const myWeek = myDate.getDay();	// 　'１日'の曜日を取得
const mySunday = myWeek==0? 1:null;
const myMonday = myWeek==1? 1:null;

return (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.text}>{myYear}年{myMonth+1}月</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>日</Text>
      <Text style={styles.text}>月</Text>
      <Text style={styles.text}>火</Text>
      <Text style={styles.text}>水</Text>
      <Text style={styles.text}>木</Text>
      <Text style={styles.text}>金</Text>
      <Text style={styles.text}>土</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>{mySunday}</Text>
      <Text style={styles.text}>2</Text>
      <Text style={styles.text}>3</Text>
      <Text style={styles.text}>4</Text>
      <Text style={styles.text}>5</Text>
      <Text style={styles.text}>6</Text>
      <Text style={styles.text}>7</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>1</Text>
      <Text style={styles.text}>2</Text>
      <Text style={styles.text}>3</Text>
      <Text style={styles.text}>4</Text>
      <Text style={styles.text}>5</Text>
      <Text style={styles.text}>6</Text>
      <Text style={styles.text}>7</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>1</Text>
      <Text style={styles.text}>2</Text>
      <Text style={styles.text}>3</Text>
      <Text style={styles.text}>4</Text>
      <Text style={styles.text}>5</Text>
      <Text style={styles.text}>6</Text>
      <Text style={styles.text}>7</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>1</Text>
      <Text style={styles.text}>2</Text>
      <Text style={styles.text}>3</Text>
      <Text style={styles.text}>4</Text>
      <Text style={styles.text}>5</Text>
      <Text style={styles.text}>6</Text>
      <Text style={styles.text}>7</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>1</Text>
      <Text style={styles.text}>2</Text>
      <Text style={styles.text}>3</Text>
      <Text style={styles.text}>4</Text>
      <Text style={styles.text}>5</Text>
      <Text style={styles.text}>6</Text>
      <Text style={styles.text}>7</Text>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    top:50,
    alignItems:'center',
  },
  row: {
    top:50,
    flexDirection:'row',
    justifyContent: 'space-between',
    textAlign:'center',
    height:50,
    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth:1.5,
  },
  text: {
    textAlign: 'center',
    fontSize:22,
  },
});
