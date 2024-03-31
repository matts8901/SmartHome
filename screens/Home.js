import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import EnergyStatusWidget from './EnergyStatusWidget';
import AIOptimizationStatus from './AIOptimizationStatus'; // Import the new component
import WeatherWidget from './WeatherWidget';
import { useNavigation } from '@react-navigation/native';
import Room from './Room';
export default function Home() {
  // State variables to store received data
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [gridSource, setGridSource] = useState('');
  const [consumption, setConsumption] = useState(0);
  const navigation = useNavigation();
  const handlePress = (screename) => {
    // Navigation logic to navigate to another component
    navigation.navigate(screename); // Replace 'AnotherComponent' with the name of your component to navigate to
  };
  useEffect(() => {
    // Establish WebSocket connection
    const ws = new WebSocket('ws://192.168.1.109:8765');
    ws.onopen = () => {
      console.log('Connected to the server');
    };
    ws.onmessage = (e) => {
      // Assuming the server sends JSON
      const data = JSON.parse(e.data);
      setBatteryLevel(data.batteryLevel);
      setGridSource(data.gridSource);
      setConsumption(data.consumption);
    };
    ws.onerror = (error) => {
      console.log('WebSocket error: ', error.message);
    };
    ws.onclose = () => {
      console.log('Disconnected from the server');
    };

    // Clean up on component unmount
    return () => ws.close();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{padding:20}}>
        <View style={{padding:12}}>
            <Text style={styles.greet}>Hi, User!</Text>
            <Text style={{fontSize:17}}>Welcome home</Text>
        </View>
        {/* Use the state variables here */}
        <WeatherWidget/>
        <EnergyStatusWidget
          consumption={consumption}
          production={14}
          batteryLevel={batteryLevel}
          gridSource={gridSource}
        />
        
        <Room
        img={require('C:/Apps/LOGINSIGNUP/assets/LivingRoom.jpg')}
        Title={"Living Room"}
        number={3}
        onPress={() => handlePress('LivingRoom')}
       />

       <Room
        img={require('C:/Apps/LOGINSIGNUP/assets/Bathroom.jpg')}
        Title={"Bathroom"}
        number={2}
        onPress={() => handlePress('Bathroom')}
       />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  greet: {
    fontSize:23,
    fontWeight:"bold",
  },

  applianceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Optional for multi-line display
  },
});