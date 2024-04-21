import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import WebSocket from 'react-native-websocket'; // Assuming this is correctly imported based on your environment

function Appliance({ picicon, name, consumption, onToggle, controlMessage }) {
  const [isOn, setIsOn] = useState(false);
  const websocketRef = useRef(null);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle(!isOn);
    }
    if (websocketRef.current) {
      // Construct control message based on the toggle state
      const messageToSend = isOn ? "toggle isOff" : "toggle isOn";
      websocketRef.current.send(messageToSend);
    }
  };

  return (
    <View style={styles.container}>
      <Icon name={picicon} size={40} color={"#9cc3db"} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>Consumes {consumption} KHw</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isOn ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleToggle}
        value={isOn}
      />
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
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#afafb6',
    width: 'auto',
    margin: 20,
  },
  text: {
    marginVertical: 7,
    marginLeft: 10,
  },
});

export default Appliance;
