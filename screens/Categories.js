import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Appliance from './Appliance';
export default function Timer() {
  return (
    <ScrollView>
      <Text style={styles.text}>Appliance Control</Text>
    <View style={styles.applianceContainer}>
    <Appliance/>
    <Appliance/>
    <Appliance/>
    <Appliance/>
    <Appliance/>
    <Appliance/>
    <Appliance/>
    <Appliance/>
    </View>
</ScrollView>
  )

  
}

const styles = StyleSheet.create({
  // ... other styles
  text:{
    fontSize:30,
    textAlign:"center",
    marginTop:25,
  },
  applianceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Optional for multi-line display
  },
});
