import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Bubbles } from 'react-native-loader';
import logo from '../images/mapMarker.png';

export default function Loading() {
   return (
    <View style={styles.bubbleContainer}>
        <Image style={styles.logo} source={logo} />
        <Bubbles color="#15c3d6" />
    </View>
    ) 
};

const styles = StyleSheet.create({
    bubbleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255, 0.8)'
      },  
    logo: {
        marginBottom: 10,
    },
})