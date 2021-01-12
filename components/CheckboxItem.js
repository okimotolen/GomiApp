import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { CheckBox, Icon } from 'react-native-elements';
import { StyleSheet, Switch, Text, View, TouchableHighlight } from 'react-native';

const CheckboxItem = ({text,checked,onPress}) => {
const [isChecked, setIsChecked] = useState(false);
const toggleCheckbox = () => setIsChecked(previousState => !previousState);
const checkboxText = isChecked ? 'Checked' : 'Unchecked';

  return (
    <View style={styles.container}>
      <CheckBox
        containerStyle={styles.checkboxItem}
        title={text}
        checkedIcon='check'
        UncheckedIcon='check-square'
        checkedColor='red'
        textStyle={styles.checkboxTitle}
        checked={checked}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    top: 80,
    height: 50,
    alignItems: 'center',
    marginTop: -1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    backgroundColor: '#fff',
  },
  checkboxItem: {
    width: '100%',
    backgroundColor: '#fff',
    height:45,
    borderTopWidth:0,
    borderBottomWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
  },
  checkboxTitle: {
    fontSize: 18,
  },
});

export default CheckboxItem;
