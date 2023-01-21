import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Image } from "@rneui/base";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import { CardStyleInterpolators } from "@react-navigation/stack";

const cats = [
  {
    text: "Go on a walk",
    date: "Yesterday",
  },
  {
    text: "Spend time with a loved one",
    date: "2 days ago",
  },
  {
    text: "Take a hot bath",
    date: "Yesterday",
  },
  {
    text: "Listen to a new song",
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

const Tasks = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.view}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674330886/re-new/image_2_cqi1he.png",
        }}
        style={styles.avatar}
      />
      <Text style={styles.heading}>{route.params.id}</Text>
      <Text style={styles.subhead}>How are you feeling today?</Text>
      <FlatList
        data={cats}
        renderItem={({ item }) => <Item text={item.text} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingTop: 40,
    backgroundColor: "#F8F2FE",
    flex: 1,
    paddingHorizontal: "10%",
  },
  container: {
    borderRadius: 15,
    shadowColor: "#ddd",
    shadowOpacity: 5,
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
    marginBottom: 16,
    shadowColor: "#dfdfdf",
    shadowOpacity: 35,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 35,
    borderRadius: 15,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",
    marginTop: 5,
    width: 200,
  },
  heading: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 40,
    marginTop: -30,
  },
  subhead: {
    fontFamily: "Montserrat_400Regular_Italic",
    fontSize: 14,
    color: "#6b6b6b",
    marginBottom: 25,
  },
  avatar: {
    height: 55,
    width: 55,

    marginLeft: 250,
  },
});

export default Tasks;
