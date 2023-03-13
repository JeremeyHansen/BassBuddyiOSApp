import { View, Text, Button } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5cdb95",
      }}
    >
      <Text
        style={{ fontSize: 35, fontFamily: "Futura-Medium", color: "#05386b" }}
      >
        Bass Buddy
      </Text>
      <Button title="Find Shows" onPress={()=> navigation.navigate('Cities')} />
    </View>
  );
}
