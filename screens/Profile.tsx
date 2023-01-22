import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";
import History from "../components/common/History";

const Profile = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.view}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674339436/re-new/image_2_phncyx.png",
          }}
          style={styles.img}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.heading}>Jane Doe</Text>
          <Text style={styles.subhead}>re:newer since 01/01/2022</Text>
        </View>
      </View>
      <Image
        source={{
          uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674331124/re-new/Group_9_fou4a4.png",
        }}
        style={styles.banner}
      />
      <History />
      <Text
        style={{
          marginVertical: 20,
          fontFamily: "Montserrat_600SemiBold",
          fontSize: 14,
        }}
      >
        Your week at a glance
      </Text>
      <Image
        source={{
          uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674340079/re-new/Group_11_n36g6h.png",
        }}
        style={{
          height: 60,
          width: "100%",
          resizeMode: "contain",
          marginBottom: 20,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 30,
    backgroundColor: "#F8F2FE",
    flex: 1,
    paddingHorizontal: "10%",
  },
  heading: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 24,
  },
  subhead: {
    fontFamily: "Montserrat_400Regular_Italic",
    fontSize: 12,
    color: "#6b6b6b",
  },
  img: {
    width: 100,
    height: 100,
  },
  banner: {
    flex: 1,
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginTop: 20,
  },
});

export default Profile;
