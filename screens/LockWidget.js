import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WebSocket from 'react-native-websocket';
import { useTheme } from './ThemeContext';
function LockWidget() {
  const [isLocked, setIsLocked] = useState(true);
  const websocketRef = useRef(null);
  const {darkMode} = useTheme();
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
        <Icon name={isLocked ? 'lock' : 'lock-open-variant'} size={100} style={[darkMode && styles.darkModewid]} />
      </TouchableOpacity>
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
    marginTop: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  darkModewid:{
    color:"white",
  }
});

export default LockWidget;
