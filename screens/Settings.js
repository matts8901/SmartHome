import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext'; // Import the useTheme hook
const Settings = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Access dark mode state and toggle function
 
  return (
    <View style={[styles.container, darkMode && styles.darkModeContainer]}>
      <Text style={[styles.title, darkMode && styles.darkModeText]}>Settings</Text>
      <View style={styles.setting}>
        <Text style={[styles.settingLabel, darkMode && styles.darkModeText]}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode} // Use the toggleDarkMode function to toggle dark mode
        />
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  darkModeContainer: {
    backgroundColor: '#222',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  darkModeText: {
    color: '#fff',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  settingLabel: {
    fontSize: 16,
    color: '#000',
  },
});
 
export default Settings;