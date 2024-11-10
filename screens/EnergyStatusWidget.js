// EnergyStatusWidget.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EnergyStatusWidget = () => {
  const [batteryPercentage, setBatteryPercentage] = useState(0);
  const [sunlightAvailability, setSunlightAvailability] = useState(0);
  const [pg, setPg] = useState('Loading...');
  const [edlStatus, setEdlStatus] = useState('Loading...');
  const [Usage, setUsage] = useState('Loading...');

  useEffect(() => {
    const ws = new WebSocket('ws://172.20.10.14:8765');

    ws.onopen = () => {
      console.log('Connected to the server');
    };

    ws.onmessage = (event) => {
      console.log('Received data:', event.data);
      const receivedData = JSON.parse(event.data);
      setBatteryPercentage(receivedData.battery_percentage);
      setSunlightAvailability(receivedData.sunlight_availability);
      setPg(receivedData.pg);
      setEdlStatus(receivedData.edl_status);
      setUsage(receivedData.usage);
    };

    ws.onerror = (error) => {
      console.log('WebSocket error:', error.message);
    };

    ws.onclose = () => {
      console.log('Disconnected from the server');
    };

    // Cleanup function
    return () => {
      ws.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overall Energy Status</Text>
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Sunlight Availability:</Text>
        <Text style={styles.dataValue}>{sunlightAvailability}%</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Battery Percentage:</Text>
        <Text style={styles.dataValue}>{batteryPercentage}%</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Grid Source:</Text>
        <Text style={styles.dataValue}>{pg}</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>EDL Status:</Text>
        <Text style={styles.dataValue}>{edlStatus}</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Usage:</Text>
        <Text style={styles.dataValue}>{Usage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
  dataLabel: {
    fontWeight: '500',
    color: '#424242',
  },
  dataValue: {
    fontWeight: '500',
    color: '#757575',
  },
});

export default EnergyStatusWidget;
