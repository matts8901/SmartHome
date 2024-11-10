import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Appliance from './Appliance';
import ApplianceT from './ApplianceT';
import ApplianceL from './ApplianceL';
function LivingRoom() {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate("Home");
    };

    const handleToggle = (isOn, controlMessage) => {
        console.log('Switch toggled. Is ON:', isOn);
        // Implement logic to send controlMessage to the server
        // You can use WebSocket or any other method to communicate with the server
        sendMessageToServer(controlMessage);
    };

    const sendMessageToServer = (message) => {
        // Implement logic to send message to the server
        console.log('Sending message to server:', message);
        // You can use WebSocket or any other method to communicate with the server
    };

    return (
        <ScrollView>
            <View>
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.greet}>LivingRoom</Text>
                <View style={styles.applianceContainer}>
                <Appliance
                picicon="light-bulb"
                name="Smart Light"
                consumption="10"
                onToggle={(isOn) => handleToggle(isOn)}
            />

                    <ApplianceT
                        picicon="television"
                        name="TV"
                        consumption="10"
                        onToggle={(isOn) => handleToggle(isOn, "toggle_light")}
                        controlMessage={"toggle_light"}
                        adjt={"Volume"}
                        min={0}
                        max={100}
                    />
                    <ApplianceT
                        picicon="air-conditioner"
                        name="air-conditioner"
                        consumption="20"
                        onToggle={(isOn) => handleToggle(isOn, "Lock_Unlock")}
                        controlMessage={"Lock_Unlock"}
                        adjt={"Temperature"}
                        min={16}
                        max={31}
                    />
                    <ApplianceL
  name="Motor"
  consumption={3.5}
/>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    greet: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#3266ff",
        color: 'white',
        padding: 10,
    },
    applianceContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    backButton: {
        position: 'absolute',
        top: 49,
        left: 20,
        zIndex: 1,
    },
});

export default LivingRoom;
