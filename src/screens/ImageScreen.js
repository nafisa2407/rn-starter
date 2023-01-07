import react from 'react';
import { Text, StyleSheet, View } from 'react-native';

import ImageDetail from "./components/ImageDetail"
import forest from "../images/forest.jpg"

import beach from "../images/beach.jpg"
import mountain from "../images/mountain.jpg"
const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" imageSource={forest} imageScore={1}/>
        <ImageDetail title="Beach" imageSource={beach} imageScore={10}/>
        <ImageDetail title="Mountain" imageSource={mountain} imageScore={12}/>
    </View>
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ImageScreen;