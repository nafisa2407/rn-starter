import React from "react";
import { Text, StyleSheet, View, TouchableOpacity,Button } from "react-native";
import ComponentScreen from "./ComponentScreen";
import ListScreen from "./ListScreen";

const HomeScreen = (props) => {
  console.log('props', props)
  const myname = 'Nafeesa';
  const onPress = () => props.navigation.navigate('List');
  const onImagePress = () => props.navigation.navigate('Image');
  const onCounterPress = () => props.navigation.navigate('Counter');
  const onColorPress = () => props.navigation.navigate('Color');
  const onSquarePress = () => props.navigation.navigate('Square');


  return (<View>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.welcomeText}>Goto ComponentScreen</Text>
      <Text style={styles.nameText}>{myname}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onImagePress}>
      <Text style={styles.welcomeText}>Goto ImageScreen</Text>
      <Text style={styles.nameText}>{myname}</Text>
    </TouchableOpacity>
    <Button title='Goto Counter Demo' onPress={onCounterPress}/>
    <Button title='Goto Color Demo' onPress={onColorPress}/>
    <Button title='Goto Color  square' onPress={onSquarePress}/>
   
  </View>
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
export default HomeScreen;
