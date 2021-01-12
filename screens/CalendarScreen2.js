import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  dayNames: ['日','月','火','水','木','金','土'],
  dayNamesShort:['日','月','火','水','木','金','土'],
  today: 'new Date()'
};
LocaleConfig.defaultLocale = 'fr';

export default function CalendarScreen() {
const dayComponent = {() => {
  if (weekday() == 5) {
      style: {backgroundColor: 'red'}
}
return (
  <View style={styles.container}>
    <Calendar style={styles.calendar}
      monthFormat={'yyyy年MM月'}
      // Collection of dates that have to be marked. Default = {}
      dayComponent={dayComponent}
    />
  </View>
);
}
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  calendar: {
    position:'absolute',
    top:50,
  },
});
