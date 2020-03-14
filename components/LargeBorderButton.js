import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export function LargeBorderButton(props) {
  return (
    <View style={styles.buttonViewStyle}>
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text style={{fontSize : 25, color : '#2aafc0'}}>{props.title}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonViewStyle : {
        flex: 5, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor : '#ffffff', 
    },
    buttonStyle : {
        alignItems : 'center', 
        justifyContent : 'center', 
        height : 170, width : 300, 
        backgroundColor : 'blue', 
        borderRadius : 15, 
        backgroundColor : '#ffffff',
        borderColor : '#2aafc0',
        borderWidth : 1
    }
});
