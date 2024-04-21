import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Dimensions } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Timer from './Timer';
import GetPremium from './GetPremium';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const Settings = () => {
  const navigation = useNavigation();
  
  const [text, setText] = useState('');
  const [modalVisibleOn, setModalVisibleOn] = useState(false);
  const [modalVisibleOff, setModalVisibleOff] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedDateOn, setSelectedDateOn] = useState(null);
  const [selectedDateOff, setSelectedDateOff] = useState(null);
  const [schedules, setSchedules] = useState([]);

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  const toggleDay = (day) => {
    const isSelected = selectedDays.includes(day);
    if (isSelected) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleConfirmOn = (date) => {
    setModalVisibleOn(false);
    setSelectedDateOn(date);
  };

  const handleConfirmOff = (date) => {
    setModalVisibleOff(false);
    setSelectedDateOff(date);
  };

  useEffect(() => {
    if (schedules.length > 0) {
      navigation.navigate('Schedule', { schedules });
    }
  }, [schedules, navigation]);

  const addSchedule = () => {
    if (text && selectedDateOn && selectedDateOff && selectedDays.length > 0) {
      const newSchedule = {
        name: text,
        onTime: selectedDateOn,
        offTime: selectedDateOff,
        days: selectedDays,
      };
      setSchedules([...schedules, newSchedule]);
      setText('');
      setSelectedDateOn(null);
      setSelectedDateOff(null);
      setSelectedDays([]);
    } else {
      // Display an alert or toast message indicating that all fields are required
    }
  };
  

  
  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Device Name</Text>
      <TextInput
        value={text}
        onChangeText={handleInputChange}
        placeholder="Enter some text here"
        style={styles.textInput}
      />

      {/**turn On time */}
      <Text style={styles.titles}>When to turn on</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setModalVisibleOn(true)}
      >
        <Text style={styles.selectedText}>{selectedDateOn ? moment(selectedDateOn).format('hh:mm A') : 'Set time...'}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={modalVisibleOn}
        mode="time"
        onConfirm={handleConfirmOn}
        onCancel={() => setModalVisibleOn(false)}
      />
      
      {/**turn Off time */}
      <Text style={styles.titles}>When to turn off</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setModalVisibleOff(true)}
      >
        <Text style={styles.selectedText}>{selectedDateOff ? moment(selectedDateOff).format('hh:mm A') : 'Set time...'}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={modalVisibleOff}
        mode="time"
        onConfirm={handleConfirmOff}
        onCancel={() => setModalVisibleOff(false)}
      />
      <Text style={styles.titles}>Select Days</Text>
      <View style={styles.dayContainer}>
  <TouchableOpacity
    style={[styles.dayButton, selectedDays.includes('Mon') && styles.selectedDayButton]}
    onPress={() => toggleDay('Mon')}
  >
     <Text style={[styles.dayButtonText, selectedDays.includes('Mon') && styles.dayButtonSelectedText]}>Mon</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[styles.dayButton, selectedDays.includes('Tue') && styles.selectedDayButton]}
    onPress={() => toggleDay('Tue')}
  >
     <Text style={[styles.dayButtonText, selectedDays.includes('Tue') && styles.dayButtonSelectedText]}>Tue</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[styles.dayButton, selectedDays.includes('Wed') && styles.selectedDayButton]}
    onPress={() => toggleDay('Wed')}
  >
  <Text style={[styles.dayButtonText, selectedDays.includes('Wed') && styles.dayButtonSelectedText]}>Wed</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[styles.dayButton, selectedDays.includes('Thu') && styles.selectedDayButton]}
    onPress={() => toggleDay('Thu')}
  >
  <Text style={[styles.dayButtonText, selectedDays.includes('Thu') && styles.dayButtonSelectedText]}>Thu</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[styles.dayButton, selectedDays.includes('Fri') && styles.selectedDayButton]}
    onPress={() => toggleDay('Fri')}
  >
   <Text style={[styles.dayButtonText, selectedDays.includes('Fri') && styles.dayButtonSelectedText]}>Fri</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[styles.dayButton, selectedDays.includes('Sat') && styles.selectedDayButton]}
    onPress={() => toggleDay('Sat')}
  >
   <Text style={[styles.dayButtonText, selectedDays.includes('Sat') && styles.dayButtonSelectedText]}>Sat</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[styles.dayButton, styles.lastDayButton, selectedDays.includes('Sun') && styles.selectedDayButton]}
    onPress={() => toggleDay('Sun')}
  >
     <Text style={[styles.dayButtonText, selectedDays.includes('Sun') && styles.dayButtonSelectedText]}>Sun</Text>
  </TouchableOpacity>
</View>
      <View style={styles.buttonContainer}>
      <Button
  title='Add Schedule'
  onPress={() => {
    addSchedule();
    navigation.navigate('Schedule', { schedules: [...schedules] });
  }}/>

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    paddingHorizontal: 20,
  },
  titles: {
    fontWeight: "500",
    fontSize: 16,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
    marginVertical: 10,
    fontWeight: "500"
  },
  button: {
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
    borderColor: '#000000',
    borderWidth: 2,
  },
  selectedText: {
    fontSize: 16,
  },
  dayContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    borderRadius: 7,
    backgroundColor:"#Ececee",
  },
  dayButton: {
    flex: 1,
    padding: 10,
    borderColor: '#000000',
    width: "auto",
  },
  lastDayButton: {
    borderRightWidth: 0,
  },
  selectedDayButton: {
    backgroundColor: '#1100f5',
  },
  dayButtonText: {
    fontSize: 14,
    color:"#767677",
  },
  dayButtonSelectedText: {
    color: '#FFFFFF', 
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    alignSelf: 'center', // Align container horizontally in the middle of the screen
  },
  scheduleContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});

export default Settings;
