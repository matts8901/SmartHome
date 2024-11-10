import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';

const { height } = Dimensions.get('window');

function Onboard4({ navigation }) {
  // Calculate the height of the blue section (70% of screen height)
  const blueHeight = height * 0.7;
  // Calculate the height of the white section (30% of remaining height)
  const whiteHeight = height - blueHeight;
  // Calculate the button height
  const buttonHeight = Math.min(blueHeight, whiteHeight) * 0.5;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: blueHeight, backgroundColor: '#1500ff', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/Onboard4.png')} style={styles.picture} />
      </View>
      <View style={{ height: whiteHeight, backgroundColor: 'white' }}>
        <View style={{ height: buttonHeight, alignItems: 'center', justifyContent: 'center'}}>
            <View> 
                <Text style={{textAlign:"center", fontWeight:"700", fontSize:21, paddingVertical:10, marginTop:60}}>Daily Status</Text>
                <Text style={{paddingHorizontal:10, marginBottom:25}}>Get info of current grid source, weather...</Text>
            </View>
          <View style={{alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={styles.skipB}>
            <Text style={styles.skipText}>skip</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  picture: {
    alignSelf: 'center',
    width: 280,
  },
  button: {
    backgroundColor: '#B5B9BB',
    borderRadius: 10,
    padding:12,
    paddingHorizontal:40,
  },
  buttonText: {
    color: '#1500ff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  skipB: {
    position:"relative",
    left:130,
    top:35,
  },
  skipText:{
    fontSize:24,
  },
});

export default Onboard4;
