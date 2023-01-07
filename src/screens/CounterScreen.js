import React, { useState } from 'react';
import { Text, StyleSheet, Button, View, TextInput } from 'react-native';

const ImageDetail = ({ title, imageScore, imageSource }) => {
    const [counter, setCounter] = useState(0)

    return <View>
        <Button title='Increase' onPress={() => setCounter(counter + 1)} />
        <Button title='Decrease' onPress={() =>  setCounter(counter - 1)} />
        <TextInput>Current Count : {counter}</TextInput>


    </View>
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ImageDetail;