import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
function WeatherWidget() {
    
    {/**APIs */}
  const Location = "Beirut"
  const date = "3 May 2024"
  const weatherstate = "Rainy Day"
  const Temperature = "25"
  const sun = "sun"
  const col = "orange"
    
  return (
    <View style={styles.container}>

        <Text style={{fontSize:15,color:"#8d92a4",marginBottom:10}}>{Location}, {date}</Text>
        <View style={styles.container2}>
  <View>
    <Icon name={sun} size={40} color={col} />
  </View>
  <View style={{marginLeft:10}}>
    <Text style={{ fontSize: 22, fontWeight: "bold"}}>{weatherstate}</Text>
    <Text style={{fontSize: 25}}>{Temperature}</Text>
  </View>
</View>
    
    </View>
    
  )
}

const styles = StyleSheet.create({
    // ... other styles
    container: {
        backgroundColor:'#f7f7fd',
        padding:10,
        alignItems:'center',
        marginVertical:17,
        borderRadius:30,
    },
    container2:{
        flexDirection: 'row', // Arranges elements horizontally
        alignItems: 'center',
    }
  });

export default WeatherWidget