import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ScheduleWidget from './ScheduleWidget';
import moment from 'moment'; // Ensure moment is imported if used
import { useNavigation } from '@react-navigation/native';

const Customize = ({ route }) => {
  // Safely destructure with a default empty array
  const { schedules = [] } = route.params || {};
  const navigation = useNavigation();

  const addSch = () => {
    navigation.navigate("CreateSchedule"); // Navigate back to the 'Settings' screen
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Scheduled Timers</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={addSch}
      >
        <Text style={styles.addButtonText}>Add Schedule</Text>
      </TouchableOpacity>
      {schedules.map((schedule, index) => (
  <ScheduleWidget
    key={index}
    Title_Name={schedule.name}
    OnTime={moment(schedule.onTime).format('hh:mm A')}
    OffTime={moment(schedule.offTime).format('hh:mm A')} // Corrected
    Days={schedule.days.join(', ')}
  />
))}


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  addButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Customize;
