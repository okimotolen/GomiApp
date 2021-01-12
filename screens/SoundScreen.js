import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ReminderItem from "../components/ReminderItem";
import {OnSound} from "../store/actions/sound";
import {OffSound} from "../store/actions/sound";
import { StyleSheet, Switch, Text, View, TouchableHighlight } from 'react-native';

export default function SoundScreen() {
  const [isSound, setIsSound] = useState(false);
  const switchText = sounds==1 ? '通知音 あり' : '通知音 なし';
  const sound = useSelector(state => state.sound);
  const {sounds} = sound;
  const dispatch = useDispatch();
  const soundNumber = 1;
  const toggleSwitch = () => {
    if(sounds==1){
    dispatch(OffSound(soundNumber));
    setIsSound(previousState => !previousState);
  } else {
    dispatch(OnSound(soundNumber));
    setIsSound(previousState => !previousState);
  }
};

    return (
      <View style={styles.reminderItem}>
        <View style={styles.container}>
          <View style={styles.switch}>
            <Switch
              trackColor={{ false: 'black', true: 'red' }}
              thumbColor={setIsSound ? 'yellow' : 'yellow'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value= {sounds==1}
            />
          </View>
          <View style={styles.settingItem}>
              <Text style={styles.settingItemTitle}>
                {switchText}
             </Text>
          </View>
        </View>
      </View>
)};

const styles = StyleSheet.create({
  reminderItem: {
    flex:1,
    width:'100%',
    backgroundColor: '#fff',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    top: 80,
    height: 45,
    alignItems: 'center',
    marginTop: -1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#aaa',
  },
  settingItem: {
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  settingItemTitle: {
    fontSize: 18,
  },
  switch: {
    paddingLeft: 10,
    justifyContent: 'center',
  },
});
