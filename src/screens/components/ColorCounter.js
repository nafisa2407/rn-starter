import react from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorCounter= ({ color, onIncrease, onDecrease }) => {
   
    return <View>
        <Text style={StyleSheet.style}>{color}</Text>
        <Button onPress = {()=>onIncrease()} title={`Increase ${color}`} />
        <Button onPress = {()=>onDecrease()} title={`Decrease ${color}`} />

    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    buttonStyle: {
        marginTop: 100,
        height: 50,
        width: 50
    }
})

export default ColorCounter;