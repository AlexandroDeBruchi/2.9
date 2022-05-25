
import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from "react-native";


import { Ionicons } from '@expo/vector-icons'; 
export default function Header() {
  return (
    <View>
      <View style={styles.topContainer}></View>
      <View style={styles.mainContainer}>
        <Text style={styles.textInput}>Re:Store</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 30,
    backgroundColor: "#FF1493",
  },
  mainContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "#FF1493",
    padding: 5,
    paddingTop:10,
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
  },
  textInput: {
    width: "65%",
    borderColor: "#422b3a",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#FF1493",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 25,
  },
});