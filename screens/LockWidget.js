import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WebSocket from 'react-native-websocket';

function LockWidget() {
  const [isLocked, setIsLocked] = useState(true);
  const websocketRef = useRef(null);

  const toggleLock = () => {
    setIsLocked(!isLocked);
    if (websocketRef.current) {
      const message = isLocked ? "unlock" : "lock";
      websocketRef.current.send(message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleLock}>
        <Icon name={isLocked ? 'lock' : 'lock-open-variant'} size={100} color="#000" />
      </TouchableOpacity>
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
    marginTop: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LockWidget;
