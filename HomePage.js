import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
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
import Signup from "./screens/Signup";
import { Welcome } from "./screens";
import CreateSchedule from "./screens/CreateSchedule";


export default function HomePage() {
  const Drawer = createDrawerNavigator();
  return (
   
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1
                  }}
                >
                  <Image
                    source={User}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: 65
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#111"
                    }}
                  >Username</Text>
                </View>
                <DrawerItemList {...props} />
                <TouchableOpacity
  style={{
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#2b76f0",
    marginHorizontal: 20,
    borderRadius: 7,
  }}
  onPress={() => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: () => props.navigation.navigate('Welcome'), // Navigate to Welcome component or perform logout action
        },
      ]
    );
  }}
>
  <Text style={{ fontWeight: "bold", fontSize: 20, color: "white", padding: 10 }}>Logout</Text>
</TouchableOpacity>

              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#3266ff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Home}
        />

        <Drawer.Screen
          name="Categories"
          options={{
            drawerLabel: "Control",
            title: "Control",
            drawerIcon: () => (
              <MaterialIcons name="category" size={20} color="#808080" />
            )
          }}
          component={Categories}
        />
        <Drawer.Screen
          name="Schedule"
          options={{
            drawerLabel: "Schedule",
            title: "Schedule",
            drawerIcon: () => (
              <MaterialIcons name="dashboard-customize" size={20} color="#808080" />
            )
          }}
          component={Customize}
        />
        <Drawer.Screen
  name="CreateSchedule"
  options={{
    drawerLabel: "CreateSchedule",
    title: "CreateSchedule",
    drawerIcon: () => (
      <SimpleLineIcons name="settings" size={20} color="white" />
    ),
    drawerLabelStyle: {
      color: 'white', // Set drawer label color to white
    },
    drawerItemStyle: {
      display: 'none', // Hide the drawer item
    },
  }}
  component={CreateSchedule}
/>

        
    
<Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            ),
          }}
          component={Settings}
        />

        <Drawer.Screen
          name="Contact"
          options={{
            drawerLabel: "Contact",
            title: "Contact",
            drawerIcon: () => (
              <MaterialCommunityIcons name="message-alert-outline" size={20} color="#808080" />
            )
          }}
          component={Contact}
        />



      </Drawer.Navigator>
  
  );
}