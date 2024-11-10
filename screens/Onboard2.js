import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { height } = Dimensions.get('window');

function Onboard2() {
const navigation = useNavigation();
  // Calculate the height of the blue section (70% of screen height)
  const blueHeight = height * 0.7;
  // Calculate the height of the white section (30% of remaining height)
  const whiteHeight = height - blueHeight;
  // Calculate the button height
  const buttonHeight = Math.min(blueHeight, whiteHeight) * 0.5;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: blueHeight, backgroundColor: '#1500ff', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/phone.png')} style={styles.picture} />
      </View>
      <View style={{ height: whiteHeight, backgroundColor: 'white' }}>
        <View style={{ height: buttonHeight, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{marginTop:30}}> 
                <Text style={{textAlign:"center", fontWeight:"700", fontSize:21, paddingVertical:10, marginTop:60}}>Manage Home</Text>
                <Text style={{paddingHorizontal:3, marginBottom:25}}>Make your life easier. Control lights, locks, and thermostats - all from one place.</Text>
            </View>
          <View style={{alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Onboard3')} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={styles.skipB}>
            <Text style={styles.skipText}>skip</Text>
          </TouchableOpacity>
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

export default Onboard2;
