import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import WeatherWidget from './WeatherWidget';
import EnergyStatusWidget from './EnergyStatusWidget';
import Room from './Room';
import { useNavigation, useRoute } from '@react-navigation/native';
import LockWidget from './LockWidget';
import { useTheme } from './ThemeContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ }) {
  // const route = useRoute();
  // const {token} = route.params;
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [gridSource, setGridSource] = useState('');
  const [consumption, setConsumption] = useState(0);
  const [username, setUsername] = useState('');
  const navigation = useNavigation();
  const [token,setToken] = useState(null);
  const {darkMode} = useTheme();
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

const getUser = async () => {
  try {
    console.log(token);
    const response = await axios.get("http://172.20.10.14:6000/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUsername(response.data.username);
  } catch (error) {
    console.error(error);
  }
  console.log("hi")
};

useEffect(() => {
  if (token) {
    getUser();
  }
}, [token]);
const fetchToken = async () => {
  try {
    const storedToken = await AsyncStorage.getItem("token");
    console.log("Stored token:", storedToken);
    setToken(storedToken);
  } catch (error) {
    console.error("Error fetching token:", error);
  }
};

useEffect(() => {
  fetchToken();
}, []);
    
  useEffect(() => {
    const ws = new WebSocket('ws://172.20.10.14:8765');
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
    <ScrollView style={[styles.container, darkMode && styles.darkModeContainer]}>
      <View style={{ padding: 20 }}>
        <View style={{ padding: 12 }}>
          <Text style={[styles.greet, darkMode && styles.darkModeText]}>Hi, User!</Text>
          <Text style={[{fontSize: 17}, darkMode && styles.darkModeText]}>Welcome home</Text>
        </View>
        <WeatherWidget />
        <EnergyStatusWidget
          consumption={consumption}
          production={14}
          batteryLevel={batteryLevel}
          gridSource={gridSource}
        />
        <View style={{justifyContent: 'center',alignItems: 'center', marginTop:28}}><Text style={[{fontSize:25}, darkMode && styles.darkModeText]} >Unlock/Lock your door here</Text></View>
        
        <LockWidget/>
        <Room
          img={require('../assets/LivingRoom.jpg')}
          Title={'Living Room'}
          number={3}
          titleStyle={darkMode ? [styles.title, styles.darkModeText] : styles.title}
          numberStyle={darkMode ? styles.darkModeText : null}
          onPress={() => navigation.navigate('LivingRoom')}
        />
        <Room
          img={require('../assets/Bathroom.jpg')}
          Title={'Bathroom'}
          number={2}
          titleStyle={darkMode ? [styles.title, styles.darkModeText] : styles.title}
          numberStyle={darkMode ? styles.darkModeText : null}
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
  darkModeText:{
    color:"white",
  },
  darkModeContainer:{
    backgroundColor:"#222"
  }
});