import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome } from "./screens";

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
const Stack = createNativeStackNavigator();
function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
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

<Stack.Screen
          name="Bathroom"
          component={Bathroom}
          options={{
            headerShown: false
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;