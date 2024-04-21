import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const TimePickerButton = ({ selectedTime, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.selectedText}>{selectedTime}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
    borderColor:'#000000',
    borderWidth:2,
  },
  selectedText: {
    fontSize: 16,
  },
});

export default TimePickerButton;
