import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from 'react'

import City from "./screens/City.js";
import Home from "./screens/HomeScreen";
import Map from "./screens/Map";
import Cities from "./screens/Cities";

const homeName = "Home";
const mapName = "Map";
const citiesName = "Cities";
const cityName = "City"
const Stack = createNativeStackNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#5cdb95"
          },
          showHeaderWhenEmpty: false,
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name={homeName} component={Home} />
        <Stack.Screen name={citiesName} component={Cities} />
        <Stack.Screen name={mapName} component={Map} />
        <Stack.Screen name={cityName} component={City} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
