import React, { useRef, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; // Import Feather icons from Expo
import COLORS from '../constants/colors';
import Button from '../components/Button';
 
const Welcome = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const buttonAnim = useRef(new Animated.Value(0)).current;
    const textAnim = useRef(new Animated.Value(0)).current;
    const iconAnim = useRef(new Animated.Value(0)).current;
 
    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 1000,
                easing: Easing.elastic(1.5),
                useNativeDriver: true,
            }),
            Animated.timing(buttonAnim, {
                toValue: 1,
                duration: 1000,
                easing: Easing.out(Easing.exp),
                delay: 500,
                useNativeDriver: true,
            }),
            Animated.timing(textAnim, {
                toValue: 1,
                duration: 1500,
                easing: Easing.ease,
                delay: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(iconAnim, {
                toValue: 1,
                duration: 1000,
                easing: Easing.bounce,
                delay: 500,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);
 
    const animatedButtonStyle = {
        transform: [
            {
                translateY: buttonAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                }),
            },
        ],
        opacity: buttonAnim,
    };
 
    const animatedTextStyle = {
        transform: [
            {
                translateY: textAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                }),
            },
        ],
        opacity: textAnim,
    };
 
    const animatedIconStyle = {
        transform: [
            {
                scale: iconAnim.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0.5, 1.2, 1],
                }),
            },
        ],
        opacity: iconAnim,
    };
 
    return (
        <LinearGradient
            style={{ flex: 1 }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={styles.container}>
                <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
                    <Animated.View style={[styles.header, { transform: [{ scale: scaleAnim }] }]}>
                        <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
                            <Feather name="home" size={100} color={COLORS.white} />
                        </Animated.View>
                        <Text style={styles.title}>Welcome to Smart Home</Text>
                    </Animated.View>
                    <Animated.View style={[styles.body, animatedTextStyle]}>
                        <Text style={styles.subtitle}>Control your home with ease</Text>
                        <Animated.View style={[styles.buttonContainer, animatedButtonStyle]}>
                            <Button
                                title="  Sign up  "
                                onPress={() => navigation.navigate('Signup')}
                            />
                        </Animated.View>
                        <Pressable onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginText}>Already have an account? <Text style={styles.boldText}>Login</Text></Text>
                        </Pressable>
                    </Animated.View>
                </Animated.View>
            </View>
        </LinearGradient>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        paddingHorizontal: 20,
        width: '80%',
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    iconContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.white,
        textAlign: 'center',
    },
    body: {
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: COLORS.white,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
    loginText: {
        fontSize: 16,
        color: COLORS.white,
        textAlign: 'center',
        marginTop: 20,
    },
    boldText: {
        fontWeight: 'bold',
    },
});
 
export default Welcome;