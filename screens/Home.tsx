import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";
import ProfileCard from "../components/home/ProfileCard";
import CategoryCard from "../components/home/CategoryCard";
import { Image, ListItem } from "@rneui/base";
import History from "../components/common/History";

const Home = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Hello, [User]!</Text>
      <Text style={styles.subhead}>
        "Started from the bottom now we here" - Aubrey Graham
      </Text>
      <Image
        source={{
          uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674331124/re-new/Group_9_fou4a4.png",
        }}
        style={styles.img}
      />
      {/* <ProfileCard /> */}
      <CategoryCard />
      <History />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#efebf7",
    paddingHorizontal: "10%",
  },
  heading: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 40,
  },
  subhead: {
    fontFamily: "Montserrat_400Regular_Italic",
    fontSize: 12,
    color: "#6b6b6b",
  },
  img: {
    flex: 1,
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
});

export default Home;
