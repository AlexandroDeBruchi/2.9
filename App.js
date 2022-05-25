import * as React from 'react';
import { useEffect } from 'react';
import {ScrollView, Text, View, FlatList, StyleSheet, BackHandler, Alert } from 'react-native';
import Constants from 'expo-constants';
import Items from "./Items";
import Header from "./Header";

import { Card } from 'react-native-paper';



export default function App() {
   const backAction = () => {
    Alert.alert("Внимание!", "Вы точно хотите выйти?", [
      {
        text: "Отмена",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Да", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const renderItem = (item) => {
    return (
      <Items
        iconName={item.item.iconName}
        name={item.item.name}
        description={item.item.description}
        color={item.item.color}
      ></Items>
    );
  };

  const keyExtractor = (item) => {
    item.id;
  };

  return (
    <View>
      <Header />
      <FlatList
        style={styles.exercisesFlatListContainer}
        data={exercisesData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  exercisesFlatListContainer: { width: "100%", height: "89%" },
});

const exercisesData = [
  {
    id: 0,
    iconName: "mobile",
    name: "IPhone 12",
    description:
      "Фиолетовый. 512 гб",
    color: 'violet'
  },
  {
    id: 1,
    iconName: "laptop",
    name: "MacBook Air",
    description:
      "Серый. 512 гб SSD",
    color:'grey'
  },
  {
    id: 2,
    iconName: "mobile",
    name: "IPhone 12 mini",
    description:
      "Черный. 512 гб",
        color:'black'
  },
  {
    id: 3,
    iconName: "headphones",
    name: "Marshall Major IV",
    description:
      "Коричневый",
        color:'brown'
  },
  {
    id: 4,
    iconName: "laptop",
    name: "MacBook Pro 13'",
    description:
      "Серый. 256 гб SSD",
      color:'grey'
  },
  {
    id: 5,
    iconName: "headphones",
    name: "JBL Tune 710ВТ",
    description:
      "Синий",
      color:'blue'
  },
  {
    id: 6,
    iconName: "mobile",
    name: "IPhone 13",
    description: "Красный. 128 гб",
    color:'red'
  },
];