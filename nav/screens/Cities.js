import { View, Text } from "react-native";
import { Link } from "react-router-native";
import { useNavigation } from "@react-navigation/native";

export default function Cities({ navigation, setCityName }) {
  //setting the city info
  const westCities = [
    {
      city: "Denver",
      state: "Colorado",
      cityId: 76,
      latitude: 39.7392,
      longitude: -104.9903,
    },
    {
      city: "Los Angeles",
      state: "California",
      cityId: 73,
      latitude: 34.0522,
      longitude: -118.2437,
    },
    {
      city: "San Diego",
      state: "California",
      cityId: 81,
      latitude: 32.7157,
      longitude: -117.1611,
    },
    {
      city: "San Francisco",
      state: "California",
      cityId: 72,
      latitude: 37.7749,
      longitude: -122.4194,
    },
    {
      city: "Seattle",
      state: "Washington",
      cityId: 77,
      latitude: 47.6062,
      longitude: -122.3321,
    },
  ];
  const eastCities = [
    {
      city: "Atlanta",
      state: "Georgia",
      cityId: 84,
      latitude: 33.7488,
      longitude: -84.3877,
    },
    {
      city: "Charlotte",
      state: "North Carolina",
      cityId: 101,
      latitude: 35.2271,
      longitude: -80.8431,
    },
    {
      city: "Chicago",
      state: "Illinois",
      cityId: 70,
      latitude: 41.8781,
      longitude: -87.6298,
    },
    {
      city: "Miami",
      state: "Florida",
      cityId: 87,
      latitude: 25.7617,
      longitude: -80.1918,
    },
    {
      city: "New York City",
      state: "New York",
      cityId: 70,
      latitude: 40.7128,
      longitude: -74.006,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "middle",
        backgroundColor: "#5cdb95",
      }}
    >
      <Text style={{ textAlign: "center", color: 'white', fontSize: 25, fontFamily: 'Futura-Medium', marginTop: 20 }}>East Coast</Text>
      <View style={{ display: "block", alignItems: "left", marginRight: 190 }}>
        {eastCities.map((city) => {
          return (
            <View onPress={() => (setCityName = `${city.city}`)}>
              <Text
                onPress={() =>
                  navigation.navigate("City", {
                    city: `${city.city}`,
                    state: `${city.state}`,
                    cityId: `${city.cityId}`,
                  })
                }
                style={{
                  marginLeft: 20,
                  fontFamily: "Futura-Medium",
                  marginTop: 20,
                  color: "white",
                }}
              >
                {/* <Link to='/city'> */}
                {city.city}, {city.state}
                {/* </Link> */}
              </Text>
            </View>
          );
        })}
      </View>
      <Text style={{ textAlign: "center", color: 'white', fontSize: 25, fontFamily: 'Futura-Medium', marginTop: 20 }}>West Coast</Text>
      <View
        style={{
          flex: 1,
          backgroundColor: "#5cdb95",
          marginLeft: 190,
        }}
      >
        {westCities.map((city) => {
          return (
            <Text
              onPress={() =>
                navigation.navigate("City", {
                  city: `${city.city}`,
                  state: `${city.state}`,
                  cityId: `${city.cityId}`,
                })
              }
              style={{
                fontFamily: "Futura-Medium",
                textAlign: "right",
                marginTop: 20,
                color: "#05386b",
              }}
            >
              {city.city}, {city.state}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
