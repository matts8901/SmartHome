import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WebSocket from 'react-native-websocket';

function Security({ picicon, name, consumption}) {
  const websocketRef = useRef(null);

  const handleControlMessage = (message) => {
    if (websocketRef.current) {
      websocketRef.current.send(message);
    }
  };

  return (
    <View style={styles.container}>
      <Icon name={picicon} size={60} color={"#9cc3db"} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>Consumes {consumption} KHw</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleControlMessage("SS")}
        >
          <Text style={styles.buttonText}>On</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleControlMessage("SSO")}
        >
          <Text style={styles.buttonText}>OFF</Text>
        </TouchableOpacity>

      </View>
      <WebSocket
        ref={websocketRef}
        url="ws://172.20.10.14:8765" // Update with your server URL
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#81b0ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal:2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Security;
