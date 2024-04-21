import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Contact() {
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const emailUrl = `mailto:mattzzkh@gmail.com?subject=Message from Smart Home App&body=${message}`;
    Linking.openURL(emailUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Write your message here"
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity onPress={handleSendEmail} style={styles.button}>
        <Ionicons name="mail" size={24} color="white" />
        <Text style={styles.buttonText}>Send Email</Text>
      </TouchableOpacity>
      <Text style={styles.info}>Fill in the message above and tap "Send Email" to contact us.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F8FF', // Light blue color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000080', // Dark blue color
  },
  input: {
    width: '80%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4169E1', // Royal blue color
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
  },
  info: {
    fontSize: 16,
    color: '#333',
  },
});
