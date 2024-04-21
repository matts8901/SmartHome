import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome } from "./screens";
import { useState } from 'react';
import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import User from "./assets/user.jpg";
import Backups from "./screens/Backups";
import Categories from "./screens/Categories";
import Contact from "./screens/Contact";
import Customize from "./screens/Customize";
import GetPremium from "./screens/GetPremium";
import Home from "./screens/Home";
import RateApp from "./screens/RateApp";
import Settings from "./screens/Settings";
import Timer from "./screens/Timer";
import HomePage from "./HomePage";
import LivingRoom from './screens/LivingRoom';
import Bathroom from './screens/Bathroom';
import Onboard1 from './screens/Onboard1';
import Onboard2 from './screens/Onboard2';
import Onboard3 from './screens/Onboard3';

const Stack = createNativeStackNavigator();
function App() {
  const [schedules, setSchedules] = useState([]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Onboard1'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        
        <Stack.Screen
          name="Onboard1"
          component={Onboard1}
          options={{
            headerShown: false
          }}
        />
        
        <Stack.Screen
          name="Onboard2"
          component={Onboard2}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Onboard3"
          component={Onboard3}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />

          <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="LivingRoom"
          component={LivingRoom}
          options={{
            headerShown: false
          }}

          
        /> 

<Stack.Screen name="GetPremium">
  {(props) => <GetPremium {...props} schedules={schedules} />}
</Stack.Screen>


<Stack.Screen
          name="Bathroom"
          component={Bathroom}
          options={{
            headerShown: false
          }}
        /> 
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;