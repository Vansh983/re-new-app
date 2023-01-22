import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";
import CategoryCard from "../components/home/CategoryCard";
import { Image, ListItem } from "@rneui/base";
import History from "../components/common/History";
import InProgress from "../components/home/InProgress";
import Completed from "../components/home/Completed";
import { useSelector, useDispatch } from "react-redux";
import { setStage } from "../src/store/user";

const Home = ({ navigation }) => {
  const { user } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  console.log(user);

  const handlePress = (text) => {
    navigation.push("Task", { id: text });
  };
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Hello, Jane!</Text>
      <Text style={styles.subhead}>
        "Started from the bottom now we here" - Aubrey Graham
      </Text>
      <Image
        source={{
          uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674331124/re-new/Group_9_fou4a4.png",
        }}
        style={styles.img}
      />
      {user.stage.payload === 0 && <CategoryCard handlePress={handlePress} />}
      {user.stage.payload === 1 && <InProgress />}
      {user.stage.payload === 2 && <Completed />}
      {user.stage.payload > 0 && (
        <Image
          onPress={() => dispatch(setStage(0))}
          source={{
            uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674351297/re-new/Group_14-2_tdgafl.png",
          }}
          style={styles.bannerC}
        />
      )}
      <History />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: "#F8F2FE",
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
  bannerC: {
    flex: 1,
    width: "100%",
    height: 150,
    resizeMode: "contain",
    borderRadius: 15,
  },
});

export default Home;
