import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SettingItem from "../components/SettingItem";
import SoundScreen from "../screens/SoundScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

export default function SettingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <SettingItem text="お知らせ" />
      <SettingItem/>
      <SettingItem
        text="通知音の設定"
        onPress= {() => navigation.navigate("通知音の設定")}
      />
      <SettingItem
        text="通知するごみの設定"
        onPress= {() => navigation.navigate('通知するごみの設定')}
      />
      <SettingItem/>
      <SettingItem text="家族や友だちに教える" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
