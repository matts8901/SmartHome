import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function Room({ img, Title, number, onPress }) {
  return (
    <View style={styles.container}>
        <Image source={img} style={{width: 350, height: 170, borderTopRightRadius:7, borderTopLeftRadius:10}}/>
        <View style={styles.AllText}>
            <Text style={styles.roomText}>{Title}</Text>
            <Text>{number} Devices</Text>
        </View>
        <TouchableOpacity style={styles.arrowContainer} onPress={onPress}>
            <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderRadius:7,
        borderColor:"#bebeb6",
        marginVertical:20,
        position: 'relative', 
    },
    roomText: {
        fontWeight:'bold',
        fontSize:20, 
    },
    AllText: {
        marginLeft:10,
        paddingBottom:10,
        paddingTop:8,
    },
    arrowContainer: {
        position: 'absolute',
        bottom: 10, 
        right: 10, 
    },
});

export default Room;
