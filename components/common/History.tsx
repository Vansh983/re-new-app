import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Image } from "@rneui/base";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

const cats = [
  {
    text: "Learn how to use co:here API",
    date: "Yesterday",
  },
  {
    text: "Meditate for 5 minutes",
    date: "2 days ago",
  },
  {
    text: "Do 5 pushups",
    date: "Yesterday",
  },
  {
    text: "Read 10 pages of a book",
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
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    shadowColor: "#eee",
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
