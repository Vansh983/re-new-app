import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import Ionicons from "react-native-vector-icons/Ionicons";

const InProgress = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ddd",
            paddingBottom: 10,
            borderBottomWidth: 1,
          }}
        >
          <Text style={styles.name}>Wellness Task: In Progress!</Text>
          <Ionicons
            name="time-outline"
            size={25}
            style={{ marginLeft: 50 }}
            color="#666"
          />
        </View>
        <Text style={styles.caption}>
          Thank you Jane, you selected your wellness task for the day! You are
          getting closer to re:inventing a new you.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 2,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    shadowColor: "#eeeeee",
    shadowOpacity: 5,
  },

  name: {
    fontSize: 15,
    fontFamily: "Montserrat_600SemiBold",
    marginTop: 5,
  },
  caption: {
    marginHorizontal: 0,
    marginTop: 15,
    fontFamily: "Montserrat_400Regular",
    fontSize: 11,
  },

  tick: {
    width: 25,
    height: 25,
    marginLeft: 45,
  },
});

export default InProgress;
