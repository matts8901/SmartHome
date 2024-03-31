import {
    View,
    Text,
    Image,
    Pressable,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import COLORS from "../constants/colors";
  import { Ionicons } from "@expo/vector-icons";
  import Checkbox from "expo-checkbox";
  import Button from "../components/Button";
  import { Alert } from "react-native";
  import axios from "axios";
  const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
  
    // const handleSignUp = () => {
    //     const UserData={
    //         email:email,
    //         mobile:phoneNumber,
    //         password:password
    //     }
    //     axios.post('192.168.1.127:5000/register',UserData).then(res=>console.log(res)).catch(err=>console.log(err))
  
    // }
  
    // async function signup(e) {
    //     try {
    //         console.log(email, mobile, password);
  
    //         await axios
    //             .post("http://localhost:6000/signup", { email, mobile, password })
    //             .then((res) => {
    //                 if (res.data === "exist") {
    //                     Alert.alert("User already exists");
    //                 }
  
    //                 if (res.data === "not exist") {
    //                     Alert.alert("User registered successfully");
    //                     navigation.navigate("Login");
    //                 }
    //             })
    //             .catch((e) => {
    //                 Alert.alert(e.message);
    //                 console.error(e);
    //             });
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    async function signup(e) {
      try {
        console.log(email, mobile, password);
  
        try {
          const res = await axios.post("http://192.168.1.109:6000/signup", {
            email,
            mobile,
            password,
          });
  
          if (res.data === "exist") {
            Alert.alert("User already exists");
          } else if (res.data.status === "notexist") {
            Alert.alert("User registered successfully");
            navigation.navigate('HomePage');
          }
        } catch (e) {
          Alert.alert(e.message);
          console.error(e);
        }
      } catch (e) {
        console.log(e);
      }
    }
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ flex: 1, marginHorizontal: 22 }}>
          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginVertical: 12,
                color: COLORS.black,
              }}
            >
              Create Account
            </Text>
          </View>
  
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Email
            </Text>
  
            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                name="email"
                placeholder="Enter your email address"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{
                  width: "100%",
                }}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
  
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Mobile Number
            </Text>
  
            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 22,
              }}
            >
              {/* <TextInput
                  placeholder="+91"
                  placeholderTextColor={COLORS.black}
                  keyboardType="numeric"
                  style={{
                    width: "12%",
                    borderRightWidth: 1,
                    borderLeftColor: COLORS.grey,
                    height: "100%",
                  }}
                /> */}
  
              <TextInput
                name="mobile"
                placeholder="Enter your phone number"
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                style={{
                  width: "80%",
                }}
                onChangeText={setMobile}
              />
            </View>
          </View>
  
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Password
            </Text>
  
            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                name="password"
                placeholder="Enter your password"
                placeholderTextColor={COLORS.black}
                secureTextEntry={isPasswordShown}
                style={{
                  width: "100%",
                }}
                onChangeText={(text) => setPassword(text)}
              />
  
              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )}
              </TouchableOpacity>
            </View>
          </View>
  
          <Button
            title="Sign Up"
            onPress={signup}
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
          />
  
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          ></View>
  
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}
          >
            <Text style={{ fontSize: 16, color: COLORS.black }}>
              Already have an account
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.primary,
                  fontWeight: "bold",
                  marginLeft: 6,
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  export default Signup;
  