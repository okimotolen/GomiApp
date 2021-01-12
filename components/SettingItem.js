import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const SettingItem = ({onPress, text}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.settingItem}
    >
      <Text style={styles.settingItemTitle}>
        {text}
     </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  settingItem: {
    top: 80,
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    paddingLeft: 20,
    justifyContent: 'center',
    marginTop: -1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#aaa',
  },
  settingItemTitle: {
    fontSize: 18,
  },
});

export default SettingItem;
