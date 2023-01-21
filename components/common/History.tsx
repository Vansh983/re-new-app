import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Image } from "@rneui/base";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

const cats = [
  {
    text: "Fitness",
    date: "Yesterday",
  },
  {
    text: "Skill",
    date: "2 days ago",
  },
  {
    text: "Academics",
    date: "Yesterday",
  },
  {
    text: "Wellness",
    date: "Yesterday",
  },
];

const Item = ({ text }) => {
  return (
    <View style={styles.user}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674330886/re-new/Rectangle_15_hcejk0.png",
        }}
      />
      <Text style={styles.name}>{text}</Text>
    </View>
  );
};

const History = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ marginBottom: 70 }}>
      <Text
        style={{
          marginVertical: 20,
          fontFamily: "Montserrat_600SemiBold",
          fontSize: 14,
        }}
      >
        Recently Completed
      </Text>
      <FlatList
        data={cats}
        renderItem={({ item }) => <Item text={item.text} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    shadowColor: "#ddd",
    shadowOpacity: 5,
    backgroundColor: "#F7F3FE",
    width: "45%",
    margin: 5,
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 30,
  },
  img: {
    flex: 1,
    width: "100%",
    height: 50,
    resizeMode: "contain",
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
    shadowColor: "#dfdfdf",
    shadowOpacity: 35,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    marginTop: 5,
  },
});

export default History;
