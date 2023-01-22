import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "@rneui/base";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import { CardStyleInterpolators } from "@react-navigation/stack";
import Post from "../components/feed/Post";
import axios from "axios";

// const posts = [
//   {
//     user: "erehoc_ipa",
//     caption:
//       "Learned the mechanics behind a robotic hand with my friend Jane. What a great experience!",
//     time: "3 hours ago",
//     isVerified: true,
//     userimg:
//       "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674330886/re-new/picwish_1_vvretp.png",
//     image:
//       "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674330886/re-new/image_3_1_ih77lk.png",
//   },
//   {
//     user: "aashni_shah007",
//     caption: "Sunday Fun-day with the fam!",
//     time: "3 hours ago",
//     isVerified: false,
//     userimg:
//       "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674330885/re-new/image_5_wnnabv.png",
//     image:
//       "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674370599/re-new/Laughing-Family_1_fgwljk.png",
//   },
// ];

const Feed = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://100.65.172.210:105/allposts")
      .then((res) => {
        console.log("====================================");
        console.log(res.data.data);
        console.log("====================================");
        setPosts(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.view}>
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingTop: 40,
    backgroundColor: "#F8F2FE",
    flex: 1,
    paddingHorizontal: "5%",
  },
  container: {
    borderRadius: 15,
    shadowColor: "#eee",
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

export default Feed;
