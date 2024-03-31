import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';

function AIOptimizationStatus({ aiStatus, setOptimizationMode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Optimization Mode</Text>
      <View style={styles.buttonContainer}>
      <Button
  title="Power Mode 1"
  onPress={() => {
    axios.get('http://192.168.1.117:5000/powermode1')
      .then(response => {
        console.log("test success"); // Print success message on successful response
        console.log(response.data); // Optional: Log response data if needed
      })
      .catch(error => console.error(error));
  }}
/>
        <Button
          title="Power Mode 2"
          onPress={() => setOptimizationMode('powermode2')}
          style={styles.button}
        />
        <Button
          title="Power Mode 3"
          onPress={() => setOptimizationMode('powermode3')}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // ... other styles
  container: {
    marginLeft:7
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    // Add your button styling here
  },
});

export default AIOptimizationStatus;