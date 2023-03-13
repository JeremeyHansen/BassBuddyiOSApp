// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import MainContainer from "./nav/MainContainer";
// import { NativeRouter, Route, Routes } from "react-router-native";
// import City from "./nav/screens/City";
// import Map from "./nav/screens/Map";
// import Cities from "./nav/screens/Cities";
// import HomeScreen from "./nav/screens/HomeScreen";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  // const Stack = createStackNavigator();
  return (
    <>
      <MainContainer />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
  
//   homeContainer: {},
// });

{/* <Stack.Navigator>
  <Stack.Screen name="home" component={HomeScreen} />
  <Stack.Screen name="map" component={Map} />
  <Stack.Screen name="cities" component={Cities} />
  <Stack.Screen name="city" component={City} />
</Stack.Navigator> */}