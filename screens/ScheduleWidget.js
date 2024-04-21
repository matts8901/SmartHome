import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ScheduleView({Title_Name, Days,OnTime, OffTime}) {
  return (
    <View style={styles.bigcontainer}>
      <View style={styles.titlecont}>
      <Text style={styles.title}>{Title_Name}</Text>
      <Text style={styles.Ed}>Edit</Text>
      </View>
      <Text style={styles.subt}>{Days}</Text>
        <View style={styles.container}>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>ON</Text>
            <Text style={styles.time}>{OnTime}</Text>
          </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>OFF</Text>
          <Text style={styles.time}>{OffTime}</Text>
        </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  bigcontainer: {
    margin:20,
    borderWidth:1,
    borderColor:"#E1e4ec",
  },
 
  title: {
    fontSize:21,
    fontWeight:"bold",
    paddingVertical:17,
    paddingHorizontal:10,
  },

  titlecont:{
    borderRadius:5,
    backgroundColor:"#D5e0ff",
    textAlign:"center",
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 10,
  },

  subt:{
    fontSize:17,
    textAlign:"center",
    marginTop:15,
    marginRight:10,
    color:"#A5acbb",
  },

  Ed:{
    fontSize:18,
    marginRight:10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around', // You can use other values like 'space-between' or 'space-evenly' based on your preference
    alignItems: 'center', // Align items vertically in the center
    padding: 10,
  },
  timeContainer: {
    alignItems: 'center', // Align items horizontally in the center
  },
  time:{
    fontWeight:"900",
    fontSize:17,
  },

});