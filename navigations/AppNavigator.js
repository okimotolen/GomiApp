import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from "../screens/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import SettingScreen from "../screens/SettingScreen";
import UsageScreen from "../screens/UsageScreen";
import ReminderScreen from "../screens/ReminderScreen";
import SoundScreen from "../screens/SoundScreen";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#3D66AA' },
      }}
    >
       <Stack.Screen name="ホーム" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const CalendarStack = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#3D66AA' },
      }}
    >
       <Stack.Screen name="カレンダー" component={CalendarScreen} />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#3D66AA' },
      }}
    >
     <Stack.Screen name="設定" component={SettingScreen} />
     <Stack.Screen name="通知するごみの設定" component={ReminderScreen} />
     <Stack.Screen name="通知音の設定" component={SoundScreen} />
    </Stack.Navigator>
  );
};

const UsageStack = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#3D66AA' },
      }}
    >
     <Stack.Screen name="使い方" component={UsageScreen} />
    </Stack.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="ホーム"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="カレンダー"
          component={CalendarStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="calendar" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="設定"
          component={SettingStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-settings" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="使い方"
          component={UsageStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="question" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
