import { View, Text } from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from "react-native-cards";
import { Linking } from "react-native";

export default function ConcertCard({ concert }) {
  const date = concert.date;
  const year = date.slice(0, date.length - 6);
  const updatedDate = date.slice(5);
  const day = updatedDate.slice(3);
  let month = updatedDate.slice(0, updatedDate.length - 3);

  if (month === "01") {
    month = "January";
  } else if (month === "02") {
    month = "February";
  } else if (month === "03") {
    month = "March";
  } else if (month === "04") {
    month = "April";
  } else if (month === "05") {
    month = "May";
  } else if (month === "06") {
    month = "June";
  } else if (month === "07") {
    month = "July";
  } else if (month === "08") {
    month = "August";
  } else if (month === "09") {
    month = "September";
  } else if (month === "10") {
    month = "October";
  } else if (month === "11") {
    month = "November";
  } else if (month === "12") {
    month = "December";
  }

  const finalDate = month + " " + day + ", " + year;
  return (
    <Card style={{ width: 350, borderWidth: 3, borderRadius: 5, borderColor: "#ffff" }}>
      <CardTitle
        //   subTitle={
        //     concert.artistList.length > 1 ? "Artists: " : "Artist: "
        //   }
        title={concert.artistList.map((artist) => {
            return (
              <Text style={{ fontFamily: "Futura-Medium", color: "#05386b" }}>
                {artist.name}{" "}
              </Text>
            );
        })}
        style={{ backgroundColor: "#5cdb95" }}
      />
      <CardContent>
        <Text></Text>
        <Text></Text>
        <Text>
          <Text style={{ color: "#5cdb95" }}>Date:</Text>{" "}
          {finalDate}
        </Text>
        <Text>
          <Text style={{ color: "#5cdb95" }}>Venue:</Text>{" "}
          {concert.venue.name}
        </Text>
        <Text>
          <Text style={{ color: "#5cdb95" }}>Address:</Text>{" "}
          {concert.venue.address}
        </Text>
      </CardContent>
      <CardAction separator={true} inColumn={false}>
        <CardButton
          onPress={() => Linking.openURL(`${concert.link}`)}
          title="Tickets"
          color="#5cdb95"
        />
      </CardAction>
    </Card>
  );
}
