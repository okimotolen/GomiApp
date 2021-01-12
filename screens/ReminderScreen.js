import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import CheckboxItem from "../components/CheckboxItem";
import { Image, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {OnMoeru} from "../store/actions/gomi1";
import {OffMoeru} from "../store/actions/gomi1";
import {OnPlas} from "../store/actions/gomi2";
import {OffPlas} from "../store/actions/gomi2";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function ReminderScreen() {

const dispatch = useDispatch();
const gomi1 = useSelector(state => state.gomi1);
const {moerus} = gomi1;
const gomi2 = useSelector(state => state.gomi2);
const {plastics} = gomi2;
const sound = useSelector(state => state.sound);
const {sounds} = sound;

const moeruGomi = 1;
const plastic = 2;

const [delay, setDelay] = useState(3);
const [id1, setId1] = useState(id1);
const [id2, setId2] = useState(id2);

const toggleMoeru = async() => {
  if(moerus==1) {
    dispatch(OffMoeru(moeruGomi));
    await Notifications.cancelScheduledNotificationAsync(id1);
  } else {
    dispatch(OnMoeru(moeruGomi));
    await schedulePushNotification1();
  }
};

const togglePlast = async() => {
  if(plastics==2) {
    dispatch(OffPlas(plastic));
    await Notifications.cancelScheduledNotificationAsync(id2);
  } else {
    dispatch(OnPlas(plastic));
    await schedulePushNotification2();
  }
};

async function schedulePushNotification1() {
  const id1 = await Notifications.scheduleNotificationAsync({
    content: {
      title: '今日は燃えるゴミの日です！',
      sound: 'default',
    },
    trigger: {
      repeats:true,
      hour:22,
      minute:45,
      weekday:4,
    },
  });
  setId1(id1);
}

async function schedulePushNotification2() {
  const id2 = await Notifications.scheduleNotificationAsync({
    content: {title: '今日は容器包装プラスチックゴミの日です！'},
    trigger: {
      repeats:true,
      hour:9,
      minute:0,
      weekday:3,
    },
  });
  setId2(id2);
}

/*
const btnCancel = async () => {
   await Notifications.cancelAllScheduledNotificationsAsync();
   alert("canceled:All");
}
*/

return (
  <View style={styles.container}>
    <CheckboxItem text="燃えるごみ" checked={moerus==1} onPress={toggleMoeru}/>
    <CheckboxItem text="容器包装プラスチック" checked={plastics==2} onPress={togglePlast}/>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button:{
    position:'absolute',
    top:120,
  },
});
