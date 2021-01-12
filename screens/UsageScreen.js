import { StatusBar } from 'expo-status-bar';
import React from 'react';
import UsageItem from "../components/UsageItem";
import { StyleSheet, Text, View } from 'react-native';

export default function UsageScreen() {
  return (
    <View style={styles.container}>
     <View style={styles.talkBubble} >
      <View style={styles.talkBubbleTriangle} />
      <View style={styles.talkBubbleSquare}>
        <Text style={styles.text} >カレンダーから、今月のゴミ出し日を確認することができるよ！</Text>
      </View>
     </View>
     <View style={styles.talkBubble} >
      <View style={styles.talkBubbleSquareRight}>
        <Text style={styles.text} >設定画面から、通知するごみを選んだり、通知音の設定をしたりできるよ！</Text>
      </View>
      <View style={styles.talkBubbleTriangleRight} />
     </View>
     <View style={styles.talkBubble} >
      <View style={styles.talkBubbleTriangle} />
      <View style={styles.talkBubbleSquare}>
        <Text style={styles.text} >リマインダー機能で、繰り返し通知を設定することも可能！</Text>
      </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex:1,
  width: '100%',
  backgroundColor: '#F8F9F9',
},
talkBubble: {
  top:10,
  left:28,
  backgroundColor: "transparent",
  width: '75%',
  flexDirection:'row',
  paddingTop:80,
},
talkBubbleSquare: {
  width: '100%',
  height: 80,
  backgroundColor: "#AED6F1",
  borderRadius: 10,
},
talkBubbleTriangle: {
  top:13,
  width: 0,
  height: 0,
  borderTopColor: "transparent",
  borderTopWidth: 12,
  borderRightWidth: 28,
  borderRightColor: "#AED6F1",
  borderBottomWidth: 12,
  borderBottomColor: "transparent",
},
talkBubbleSquareRight: {
  width: '100%',
  height: 80,
  backgroundColor: "#AED6F1",
  borderRadius: 10,
},
talkBubbleTriangleRight: {
  top:13,
  width: 0,
  height: 0,
  borderTopColor: "transparent",
  borderTopWidth: 12,
  borderLeftWidth: 28,
  borderLeftColor: "#AED6F1",
  borderBottomWidth: 12,
  borderBottomColor: "transparent",
},
text: {
  top:10,
  padding:15,
  fontWeight:'bold',
}
});
