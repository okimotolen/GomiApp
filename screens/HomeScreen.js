import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import {useSelector} from 'react-redux';
import GomiList from "../components/GomiList";
import DummyItems from "../dummies/DummyItems";
import { Text, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';

export default function HomeScreen() {
const gomi1 = useSelector(state => state.gomi1);
const {moerus} = gomi1;
const gomi2 = useSelector(state => state.gomi2);
const {plastics} = gomi2;
const FilteredItems = DummyItems.filter(function (dummy, index) {
  if(moerus==1 && plastics==2){
    return (dummy.title == "燃えるゴミ" ||　dummy.title == "容器包装プラスチック");
  }else if(moerus==1 && plastics!=2){
    return (dummy.title == "燃えるゴミ");
  }else if(moerus!=1 && plastics==2){
    return (dummy.title == "容器包装プラスチック");
  }else if(moerus!=1 && plastics!=2){
    return (dummy.title == "");
    }
  });


//const gomiType = new Date().getDay() == 2 ? "燃えるゴミ":"容器包装プラスチック";
const moeruText = moerus==1 ? '燃えるゴミの通知はON' : '燃えるゴミの通知はOFF';
const plasText = plastics==2 ? 'プラスチックゴミの通知はON' : 'プラスチックゴミの通知はOFF';
const myDay = new Date().getDay();


const items = FilteredItems.map((dummy, index) => {
 return(
    <GomiList
     title={dummy.title}
     day={dummy.day}
     month={dummy.month}
     date={dummy.date}
     key={index}
   />

);
})
  return (
    <View style={styles.container}>
      <View style={styles.GomiList}>
        {items}
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  GomiList: {
    paddingTop:20,
    alignItems:'center',
  },
});
