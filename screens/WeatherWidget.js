import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Using MaterialCommunityIcons

// Replace with your own API key from WeatherAPI.com
const apiKey = 'f3ea48f28cc0406f9c9182024241404';

async function fetchWeather(location) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function isDayTime(location) {
  const url = `https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${location}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.astronomy.is_day === 'yes';
}

function WeatherWidget() {
  const [location, setLocation] = React.useState('Beirut'); // Initial location
  const [weatherState, setWeatherState] = React.useState('');
  const [temperature, setTemperature] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true); // Flag for loading state

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchWeather(location);
        setWeatherState(data.current.condition.text);
        setTemperature(data.current.temp_c);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [location]);

  const isDay = React.useMemo(async () => await isDayTime(location), [location]);

  const getIconName = () => {
    if (isLoading) return null;
  
    const isSunny = weatherState.toLowerCase().includes('sunny');
    const isCloudy = weatherState.toLowerCase().includes('cloudy');
    const isRainy = weatherState.toLowerCase().includes('rain');
    const isSnowy = weatherState.toLowerCase().includes('snow');
    const isClear = weatherState.toLowerCase().includes('clear');
    const isMist = weatherState.toLowerCase().includes('mist');
  
    return !isDay.current ? (
      isSunny ? 'weather-sunny' : (
        isClear ? 'weather-sunny' : (
          isCloudy ? 'weather-partly-cloudy' : (
            isRainy ? 'day-rain' : (
              isSnowy ? 'snow' : (isMist ? 'dehaze' : null)
            )
          )
        )
      )
    ) : (
      isClear ? 'weather-night' : (
        isCloudy ? 'weather-night-partly-cloudy' : (
          isRainy ? 'night-alt-rain' : (
            isSnowy ? 'snow' : (isMist ? 'night-alt-cloudy-wind' : null) // Consider using a night-time mist icon if available
          )
        )
      )
    );
  };
  
  const iconName = getIconName();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading weather...</Text>
      ) : (
        <>
          <Text style={{ fontSize: 15, color: '#8d92a4', marginBottom: 10 }}>
            {location}, {new Date().toDateString()}
          </Text>
          <View style={styles.container2}>
            <View>
              {iconName && <Icon name={iconName} size={60} color={'gray'} />}
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{weatherState}</Text>
              <Text style={{ fontSize: 25 }}>{temperature}°C</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
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