import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image } from "@rneui/themed";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  function addHours(date, hours) {
    date.setTime(date.getTime() + 60 * 60 * 1000 * 24);

    return date;
  }
  const targetDate = new Date("2023-01-23T23:10:19Z");
  const currentDate = new Date();
  // const targetDate = addHours(currentDate, 24);
  targetDate.setHours(currentDate.getHours() + 24);
  const distance = targetDate.getTime() - currentDate.getTime();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(distance);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <View
      style={{
        width: 175,
        marginLeft: 55,
        backgroundColor: "#d9d9d9",
        padding: 15,
        marginVertical: 15,
        borderRadius: 15,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 28, color: "#585858" }}>
        {hours}:{minutes}:{seconds}
      </Text>
    </View>
  );
};

const InProgress = ({ __startCamera }) => {
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
        <CountdownTimer />
        <Image
          source={{
            uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674361716/re-new/Group_15_mxepiz.png",
          }}
          onPress={__startCamera}
          style={{ height: 55, width: 55, marginLeft: 115 }}
        />
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
