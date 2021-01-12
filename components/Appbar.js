import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Appbar = (props) => {
  return (
    <View style={styles.appbar}>
      <Text style={styles.appbarTitle}>
       {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: '#3D66AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbarTitle: {
    paddingTop: 35,
    color: '#fff',
    fontSize: 24,
  },
});

export default Appbar;
