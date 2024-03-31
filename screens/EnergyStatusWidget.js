import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';

// Optional: Import a library for data fetching (if needed)
// import { /* Your data fetching library */ } from 'your-data-fetching-library';

const BatteryGauge = ({ batteryLevel }) => {
  const gaugeWidth = 120;
  const gaugeHeight = 50;
  const batteryFill = `${batteryLevel * (gaugeWidth - 2)} ${100 - batteryLevel * (gaugeWidth - 2)}`; // Adjust fill based on level

  return (
    <View style={styles.batteryContainer}>
      <Svg width={gaugeWidth} height={gaugeHeight}>
        <Rect
          x={1} // Add a small offset to avoid stroke overlapping the edge
          y={1}
          width={gaugeWidth - 2} // Account for stroke width
          height={gaugeHeight - 2}
          fill="gray"
          rx={4} // Rounded corners for the rectangle
          ry={4}
        />
        <Rect
          x={1}
          y={1}
          width={gaugeWidth - 2}
          height={gaugeHeight - 2}
          fill="none"
          stroke="green"
          strokeWidth={2}
          strokeDasharray={batteryFill}
          rx={4}
          ry={4}
        />
        <SvgText
          x={gaugeWidth / 2}
          y={gaugeHeight / 2} // Center text vertically and horizontally
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={20} // Adjust font size as needed
        >
          {batteryLevel}%
        </SvgText>
      </Svg>
    </View>
  );
};

export default function EnergyStatusWidget({ consumption, production, batteryLevel, gridSource }) {
  // Replace with your actual data fetching logic (or use a library)
  // const consumption = 2.5;
  // const production = 1.8;
  // const batteryLevel = 75;
  // const gridSource = 'EDL';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overall Energy Status</Text>
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Consumption:</Text>
        <Text style={styles.dataValue}>{consumption} kWh</Text>
        {/* Optional Progress Bar for Consumption */}
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Production:</Text>
        <Text style={styles.dataValue}>{production} kWh</Text>
        {/* Optional Progress Bar for Production */}
      </View>
      <BatteryGauge batteryLevel={batteryLevel} />
      <Text style={styles.dataLabel}>Grid Source:</Text>
      <Text>{gridSource}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dataLabel: {
    fontWeight: 'bold',
  },
  dataValue: {
    textAlign: 'right',
  },
});
