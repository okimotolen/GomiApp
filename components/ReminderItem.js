import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Switch, Text, View, TouchableHighlight } from 'react-native';

const ReminderItem = ({text}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.switch}>
        <Switch
          trackColor={{ false: 'black', true: 'red' }}
          thumbColor={setIsEnabled ? 'yellow' : 'yellow'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onValueChange}
          value= {value}
        />
      </View>
      <View style={styles.settingItem}>
          <Text style={styles.settingItemTitle}>
            {text}
         </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default ReminderItem;
