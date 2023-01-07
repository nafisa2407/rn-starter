import React, { useState } from 'react';
import { Text, StyleSheet, Button, View, FlatList } from 'react-native';

const ColorScreen = ({ title, imageScore, imageSource }) => {
    const [color, setColors] = useState([])
    const onColorPress = () => {
        setColors([...color, randomRGB()])
        console.log(color)
        return (
            <View>
                <View style={styles.buttonStyle} title='Add Coloring' onPress={onColorPress} />
            </View>
        )
    };


    return <View>
        <Button style={styles.buttonStyle} title='Add Color' onPress={onColorPress} />
        <FlatList
            keyExtractor={item => item}
            data={color}
            renderItem={({ item }) => {
                return <View style={styles.buttonStyle} backgroundColor={item} />

            }}

        />
    </View>
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}
const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 100,
        height: 50,
        width: 50
    }
})

export default ColorScreen;