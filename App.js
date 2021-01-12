import { StatusBar } from 'expo-status-bar';
import {Provider} from 'react-redux';
import React from 'react';
import firebase from 'firebase';
import * as Notifications from 'expo';
import store from './store';
import AppNavigator from "./navigations/AppNavigator";
import { StyleSheet, Text, View } from 'react-native';
import ENV from './env.json';

  const config = {
    apiKey:             ENV.FIREBASE_API_KEY,
    authDomain:         ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL:        ENV.FIREBASE_DB_URL,
    projectId:          ENV.FIREBASE_PRJ_ID,
    storageBucket:      ENV.FIREBASE_STORAGE,
    messagingSenderId:  ENV.FIREBASE_SENDER_ID,
    appId:              ENV.FIREBASE_APP_ID,
  };
  firebase.initializeApp(config);


export default function App() {
  return(
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
