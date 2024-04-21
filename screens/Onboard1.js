import React from 'react';
import { ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function Onboard1({}) {
  const navigation = useNavigation();


  return (
    <ImageBackground
      source={require('../assets/Onboardim1.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <TouchableOpacity onPress={() => navigation.navigate('Onboard2')} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '127%',
    height: '100%'
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop:650,
    marginRight:105,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default Onboard1;
