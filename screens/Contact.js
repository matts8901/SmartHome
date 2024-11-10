import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Linking,Image,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const emailSubject = 'Message from Smart Home App';
    const emailBody = `From: ${fullName} (${emailAddress})\n\n${message}`;
    const emailUrl = `mailto:mattzzkh@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    Linking.openURL(emailUrl);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      
      <Text style={styles.title}>Contact Us</Text>
      <Image
      source={require('../assets/contactus.jpg')}
                    style={{
                      height: 130,
                      width: 150,
                      borderRadius: 20
                    }}
                  />
      <Text style={styles.info}>Contact us anytime if you're facing any issues we'll respond to you as soon as we can</Text>
      
      <Text style={{  fontSize: 18,marginRight: 230,marginBottom: 15}}>Full Name</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Enter your full name"
        value={fullName}
        onChangeText={setFullName}
      />
      
      <Text style={{  fontSize: 18,marginRight: 195,marginBottom: 15}}>Email Address</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Enter your email address"
        value={emailAddress}
        onChangeText={setEmailAddress}
      />

      <Text style={{  fontSize: 18,marginRight: 240,marginBottom: 15}}>Message</Text>
      <TextInput
        style={styles.inputM}
        multiline
        placeholder="Write your message here"
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity onPress={handleSendEmail} style={styles.button}>
        <Ionicons name="mail" size={24} color="white" />
        <Text style={styles.buttonText}>Send Email</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // Light blue color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#000080', // Dark blue color
  },

  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    textAlignVertical: 'top',
  },

  inputM: {
    width: '80%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
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
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop:10,
  },
});
