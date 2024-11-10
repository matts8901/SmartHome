import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import WebSocket from 'react-native-websocket';
import moment from 'moment'; // Import moment for time manipulation
export default function ScheduleView({ Title_Name, Days, OnTime, OffTime }) {
  const [currentTime, setCurrentTime] = useState(moment().format('h:mm A'));
  const websocketRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format('h:mm A'));
    }, 10000); 

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onTimeFormatted = moment(OnTime, 'h:mm A').format('h:mm A');
    const offTimeFormatted = moment(OffTime, 'h:mm A').format('h:mm A');

    if (currentTime === onTimeFormatted) {
      // Turn on the light
      sendControlMessage('TOn');
    } else if (currentTime === offTimeFormatted) {
      // Turn off the light
      sendControlMessage('TOff');
    }
  }, [currentTime]);

  const sendControlMessage = (message) => {
    if (websocketRef.current) {
      websocketRef.current.send(message);
    }
  };

  return (
    <View style={styles.bigcontainer}>
      <View style={styles.titlecont}>
        <Text style={styles.title}>{Title_Name}</Text>
      </View>
      <Text style={styles.subt}>{Days}</Text>
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>ON</Text>
          <Text style={styles.time}>{OnTime}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>OFF</Text>
          <Text style={styles.time}>{OffTime}</Text>
        </View>
      </View>
      <WebSocket
        ref={websocketRef}
        url="ws://192.168.1.117:8765" // Update with your server URL
        onOpen={() => console.log('WebSocket connected')}
        onClose={() => console.log('WebSocket disconnected')}
        onError={(error) => console.log('WebSocket error:', error)}
        reconnect
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bigcontainer: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#E1e4ec',
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 17,
    paddingHorizontal: 10,
  },
  titlecont: {
    borderRadius: 5,
    backgroundColor: '#D5e0ff',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  subt: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 15,
    marginRight: 10,
    color: '#A5acbb',
  },
  Ed: {
    fontSize: 18,
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  timeContainer: {
    alignItems: 'center',
  },
  time: {
    fontWeight: '900',
    fontSize: 17,
  },
});
