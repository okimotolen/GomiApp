import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UsageItem = (props) => {
  return (
    <View style={styles.usageItem}>
      <Text style={styles.usageItemTitle}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  usageItem: {
    top: 80,
    width: '100%',
    height: 140,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  },
  usageItemTitle: {
    fontSize: 20,
  },
});

export default UsageItem;
