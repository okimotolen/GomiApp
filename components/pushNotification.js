import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const content = {
  title: 'ゴミ出しの時間です！',
}

const trigger = () => {
  return (
    repeats : true,
    hour: 8,
    minute: 15,
    weekday: {number},
  )}

Notifications.scheduleNotificationAsync({
  content: content,
  trigger: trigger,
});

const [number, setNumber] = React.useState('');

export default function pushNotification() {
  return (

    <View style={styles.container}>
      <TextInput onChangeText={newNumber => setNumber(newNumber)} />
      <Text>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  GomiList: {
    paddingTop: 20,
    alignItems: 'center',
  },
});
