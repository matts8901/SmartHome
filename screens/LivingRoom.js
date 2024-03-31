import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Appliance from './Appliance';
function LivingRoom() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("Home"); // Navigate back to the previous screen
  };

  return (
    <ScrollView>
      <View>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style = {styles.greet}>LivingRoom</Text>
        <View style={styles.applianceContainer}>
    <Appliance/>
    <Appliance/>
    <Appliance/>
    </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  greet: {
    marginTop:30,
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    backgroundColor:"#3266ff",
    color:'white',
    padding:10,
  },

  applianceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Optional for multi-line display
  },

  backButton: {
    position: 'absolute',
    top: 49,
    left: 20,
    zIndex: 1,
  },
});

export default LivingRoom;