import react from 'react';
import { Text, StyleSheet, Image, View} from 'react-native';

const ImageDetail = ({ title, imageScore,imageSource }) => {
    return <View>
        <Text style={StyleSheet.style}>Welcome to ImageDetail {title}</Text>
        <Image source={imageSource}></Image>
        <Text>{imageScore}</Text>

    </View>
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ImageDetail;