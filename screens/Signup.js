import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  async function signup() {
    try {
      if (!username || !email || !mobile || !password) {
        throw new Error('Please fill in all fields.');
      }
      const res = await axios.post('http://192.168.1.113:6000/signup', {
        username,
        email,
        mobile,
        password,
      });

      if (res.data === 'exist') {
        Alert.alert('User already exists');
      } else if (res.data.status === 'notexist') {
        Alert.alert('User registered successfully');
        navigation.navigate('HomePage');
      }
    } catch (e) {
      Alert.alert(e.message);
      console.error(e);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={styles.title}>Create Account</Text>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder="Enter your username"
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email address"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            placeholder="Enter your phone number"
            style={styles.input}
            onChangeText={(text) => setMobile(text)}
          />
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.input}
            secureTextEntry={!isPasswordShown}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)} style={styles.eyeIcon}>
            <Ionicons name={isPasswordShown ? 'eye-off' : 'eye'} size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={signup}>
          <Text style={{ color: COLORS.white }}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: COLORS.black,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 8,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 22,
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: '70%',
    transform: [{ translateY: -12 }],
  },
  button: {
    marginTop: 18,
    marginBottom: 4,
    backgroundColor: COLORS.primary,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 22,
  },
  loginText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 6,
  },
});

export default Signup;
