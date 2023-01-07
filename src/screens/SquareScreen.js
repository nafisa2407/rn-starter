import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ColorCounter from './components/ColorCounter';
const color_increment = 15

const SquareScreen = () => {
    const reducer = (state)
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + state.amount }
        case 'green':
            return { ...state, green: state.green + state.amount }
        case 'blue':
            return { ...state, blue: state.blue + state.amount }
        default:
            return state;
    }
    return <View>
        <ColorCounter
            onIncrease={() => { setColor('red', color_increment) }}
            onDecrease={() => setColor('red', -1 * color_increment)}
            color='Red' />
        <ColorCounter
            onIncrease={() => setColor('blue', color_increment)}
            onDecrease={() => setColor('blue', -1 * color_increment)}
            color='Blue' />
        <ColorCounter
            onIncrease={() => setColor('green', color_increment)}
            onDecrease={() => setColor('green', -1 * color_increment)}
            color='Green' />
        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
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

export default SquareScreen;