import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import WeatherWidget from './WeatherWidget';
import EnergyStatusWidget from './EnergyStatusWidget';
import Room from './Room';
import { useNavigation, useRoute } from '@react-navigation/native';
import LockWidget from './LockWidget';
import axios from 'axios';

export default function Home({ }) {
  // const route = useRoute();
  // const {token} = route.params;
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [gridSource, setGridSource] = useState('');
  const [consumption, setConsumption] = useState(0);
  const [username, setUsername] = useState('');
  const navigation = useNavigation();
//   useEffect(() => {
//   const getUser = async () => {
//     try {
//       console.log(token);
//       const response = await axios.get("http://172.20.10.6:5000/user", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
 
//       setUsername(response.data.username);
//     } catch (error) {
//       console.error(error);
//     }
// };  getUser();
//   },[])
    
  useEffect(() => {
    const ws = new WebSocket('ws://192.168.1.117:8765');
    ws.onopen = () => {
      console.log('Connected to the server');
    };
    ws.onmessage = (e) => {
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


    return () => ws.close();
  }, );

  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 20 }}>
        <View style={{ padding: 12 }}>
          <Text style={styles.greet}>Hi, {username}!</Text>
          <Text style={{ fontSize: 17 }}>Welcome home</Text>
        </View>
        <WeatherWidget />
        <EnergyStatusWidget
          consumption={consumption}
          production={14}
          batteryLevel={batteryLevel}
          gridSource={gridSource}
        />
        <LockWidget/>
        <Room
          img={require('../assets/LivingRoom.jpg')}
          Title={'Living Room'}
          number={3}
          onPress={() => navigation.navigate('LivingRoom')}
        />
        <Room
          img={require('../assets/Bathroom.jpg')}
          Title={'Bathroom'}
          number={2}
          onPress={() => navigation.navigate('Bathroom')}
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