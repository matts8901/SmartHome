import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';

const LocationComponent = ({ setLocation }) => {
    const [errorMsg, setErrorMsg] = useState(null);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    };

    return (
        <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Location</Text>
            <Button title="Get Location" onPress={getLocation} />
        </View>
    );
};
