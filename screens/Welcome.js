
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ fontSize: 32, fontWeight: 'bold', color: COLORS.white }}>
                    Get me started
                </Text>

                <View style={{ paddingHorizontal: 22, width: '80%', marginTop: 60 }}>
                    <Text style={{ fontSize: 18, color: COLORS.white, textAlign: 'center', marginBottom: 20 }}>
                        Take control of your home
                    </Text>

                    <Button
                        title="Sign up"
                        onPress={() => navigation.navigate('Signup')}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 16, color: COLORS.white }}>
                            Already have an account?
                        </Text>
                        <Pressable onPress={() => navigation.navigate('Login')}>
                            <Text style={{ fontSize: 16, color: COLORS.white, fontWeight: 'bold', marginLeft: 4 }}>
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

export default Welcome;