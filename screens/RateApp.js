import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Appliance from './Appliance';

export default function RateApp() {
  return (
    <ScrollView>
    <View>
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
    marginTop:10,
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center"
  },

  applianceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Optional for multi-line display
  },
});