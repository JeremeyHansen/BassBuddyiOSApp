import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import ConcertCard from "./ConcertCard";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function City({ route }) {
  //setting state to concerts and fetching them from database

  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    fetch(
      `https://edmtrain.com/api/events?locationIds=${route.params.cityId}&client=774e665d-5a08-4e18-926e-4896e04e1378`
    )
      .then((res) => res.json())
      .then((data) => setConcerts(data.data));
  }, [route]);

  //setting state to search term and filter through data we received

  const [searchTerm, setSearchTerm] = useState("");
  const concertsToDisplay = concerts?.filter((concert) =>
    (
      concert.venue.name +
      concert.artistList.map((artist) => artist.name) +
      concert.date
    )
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  //setting state to open search bar

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchClose, setSearchClose] = useState(true);

  function handleOpenSearch() {
    setSearchOpen(!searchOpen);
    setSearchClose(!searchClose);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5cdb95",
      }}
    >
      <Text></Text>
      <Text></Text>
      <Text></Text>
      {/* <Text style={{ marginTop: 10 }}>
        HI {route.params.city}, {route.params.state}
      </Text> */}
      {searchClose && (
        <IonIcons.Button
          name="search-sharp"
          style={{ backgroundColor: "#5cdb95", color: "#5cdb95" }}
          onPress={handleOpenSearch}
        >
          Search
        </IonIcons.Button>
      )}
      {searchOpen && (
        <TextInput
          style={{
            height: 40,
            borderColor: "white",
            backgroundColor: "white",
            borderWidth: 1,
            borderRadius: 15,
            textAlign: "center",
            width: 200,
            marginTop: 10,
            marginBottom: 10,
            placeholderTextColor: "gray",
          }}
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
          placeholder="Artist, Venue, or Date"
        />
      )}
      <View>
        <ScrollView>
          {concertsToDisplay?.map((concert) => {
            return <ConcertCard concert={concert} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
}
