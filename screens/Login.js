import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios

import Button from '../components/Button';
import COLORS from '../constants/colors';

const Login = () => {
    const navigation = useNavigation();
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9]{8,}$/;;
    const togglePasswordVisibility = () => {
        setIsPasswordShown(!isPasswordShown);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        login(); // Call login function if the password is valid
    };
    const login = async () => {
        if (!emailRegex.test(email)) {
            Alert.alert('Invalid email format');
            return;
        }
        try {
            const response = await axios.post('http://192.168.1.109:6000/login', {
                email,
                password,
            });

            if (response.data.status === 'exist') {
                const token = response.data.token;
                // Do something with the token, e.g., store it in AsyncStorage
                console.log(token);
                navigation.navigate('HomePage', { isLoggedin: true });
            } else if (response.data === 'notexist') {
                Alert.alert('User has not signed up yet');
            } else if (response.data === 'incorrectPassword') {
                Alert.alert('Incorrect password');
            }
        } catch (error) {
            Alert.alert('An error occurred');
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Hi Welcome Back !
                    </Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '400',
                        marginVertical: 8
                    }}>Email address</Text>

                    <TextInput
                        placeholder='Enter your email address'
                        placeholderTextColor={COLORS.black}
                        keyboardType='email-address'
                        onChangeText={setEmail}
                        style={{
                            width: '100%',
                            height: 48,
                            borderColor: COLORS.black,
                            borderWidth: 1,
                            borderRadius: 8,
                            paddingLeft: 22,
                        }}
                    />
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '400',
                        marginVertical: 8
                    }}>Password</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingLeft: 22,
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            onChangeText={setPassword}
                            secureTextEntry={!isPasswordShown}
                            style={{
                                flex: 1,
                            }}
                        />

                        <TouchableOpacity
                            onPress={togglePasswordVisibility}
                            style={{
                                paddingRight: 12,
                            }}
                        >
                            <Ionicons
                                name={isPasswordShown ? 'eye-off' : 'eye'}
                                size={24}
                                color={COLORS.black}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <Button
                    title='Login'
                    filled
                    onPress={() => navigation.navigate('HomePage')}
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: 22,
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: 'bold',
                            marginLeft: 6,
                        }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
