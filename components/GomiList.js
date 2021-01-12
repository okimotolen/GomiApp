import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

const GomiList = ({title,day,month,date}) => {
//  const user = useSelector(state => state.user);
//  const {reminders} = user;
  return (
      <View style={styles.container}>
        <View style={styles.gomiList}>
          <View style={styles.gomiListType}>
            <Text style={styles.gomiListTitle}>{title}</Text>
          </View>
          <View style={styles.gomiDay}>
            <Text style={styles.gomiDayTitle}>{day}</Text>
          </View>
          <View style={styles.gomiDate}>
            <Text style={styles.gomiDateTitle}>次の収集日</Text>
            <View style={styles.gomiDateNumber}>
              <Text style={styles.gomiDateTitle}>{month}</Text>
              <Text style={styles.gomiDateTitle}>/</Text>
              <Text style={styles.gomiDateTitle}>{date}</Text>
            </View>
          </View>
      </View>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 25,
  },
  gomiList: {
    top: 10,
    width: '80%',
    height: 140,
    borderColor: '#3D66AA',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  gomiListType: {
    padding: 15,
    alignItems: 'center',
  },
  gomiListTitle: {
    color: 'black',
    fontSize: 25,
  },
  gomiDay: {
    position: 'absolute',
    padding: 5,
    top: 68,
    left: 70,
    height: 56,
    width: 56,
    backgroundColor: '#3D66AA',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gomiDayTitle: {
    color: '#fff',
    fontSize: 24,
  },
  gomiDate: {
    position: 'absolute',
    flexDirection:'row',
    width:'45%',
    top: 70,
    right: 0,
    height: 55,
    borderLeftWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  gomiDateNumber: {
    position: 'absolute',
    flexDirection:'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  gomiDateTitle: {
    fontSize: 20,
  },
});

export default GomiList;
