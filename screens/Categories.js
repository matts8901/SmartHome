import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Appliance from './Appliance';
import ApplianceT from './ApplianceT';
import Security from './Security';
export default function Timer() {
  return (
    <ScrollView>
      <Text style={styles.text}>Appliance Control</Text>
      
      <View style={styles.applianceContainer}>
                <Appliance
                picicon="light-bulb"
                name="Smart Light"
                consumption="10"
                onToggle={(isOn) => handleToggle(isOn)}
                controlMessage={"handle"}
            />

<Appliance
                picicon="light-bulb"
                name="Smart Light2"
                consumption="10"
                onToggle={(isOn) => handleToggle(isOn)}
                controlMessage={"handle"}
            />
           <Appliance
                picicon="light-bulb"
                name="Smart Light3"
                consumption="10"
                onToggle={(isOn) => handleToggle(isOn)}
                controlMessage={"handle"}
            />


                    <ApplianceT
                        picicon="television"
                        name="TV"
                        consumption="15"
                        onToggle={(isOn) => handleToggle(isOn, "toggle_light")}
                        controlMessage={"toggle_light"}
                        adjt={"Volume"}
                        min={0}
                        max={100}
                    />
                    <ApplianceT
                        picicon="air-conditioner"
                        name="air-conditioner"
                        consumption="20"
                        onToggle={(isOn) => handleToggle(isOn, "Lock_Unlock")}
                        controlMessage={"Lock_Unlock"}
                        adjt={"Temperature"}
                        min={16}
                        max={31}
                    />
                    <ApplianceT
                        picicon="air-conditioner"
                        name="air-conditioner2"
                        consumption="20"
                        onToggle={(isOn) => handleToggle(isOn, "Lock_Unlock")}
                        controlMessage={"Lock_Unlock"}
                        adjt={"Temperature"}
                        min={16}
                        max={31}
                    />
                    
                    <Security
  picicon="air-conditioner"
  name="Security Mode"
  consumption={3.5}
/>
                </View>
</ScrollView>
  )

  
}

const styles = StyleSheet.create({
  // ... other styles
  text:{
    fontSize:30,
    textAlign:"center",
    marginTop:25,
  },
  applianceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Optional for multi-line display
  },
});
