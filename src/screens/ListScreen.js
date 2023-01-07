import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


const ListScreen = () => {
  const myname = 'Nafeesa';
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => {
       return <Text>{item.title}</Text>
      }}

    />

  )

};
const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 45,
    color: 'blue'
  },
  nameText: {
    fontSize: 30
  },
});
export default ListScreen;
