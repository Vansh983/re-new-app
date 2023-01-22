import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Image } from "@rneui/base";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import { CardStyleInterpolators } from "@react-navigation/stack";

const Post = ({ post }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.post}>
      <View style={styles.user}>
        <Image
          style={styles.userimg}
          resizeMode="cover"
          source={{
            uri: post.userimg,
          }}
        />
        <Text style={styles.name}>{post.user}</Text>
        <Image
          style={styles.tick}
          resizeMode="cover"
          source={
            post.isVerified
              ? {
                  uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674330886/re-new/image_6_ltkkos.png",
                }
              : {
                  uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674330885/re-new/image_2_2_zgble7.png",
                }
          }
        />
      </View>
      <Image
        style={styles.img}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.caption}>{post.caption}</Text>
      <Text style={styles.time}>{post.time}</Text>
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
  post: {
    borderRadius: 15,
    shadowColor: "#eee",
    shadowOpacity: 5,
    margin: 5,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 5,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  user: {
    flexDirection: "row",
    marginBottom: 2,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  userimg: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
    marginTop: 5,
    width: 200,
  },
  caption: {
    marginHorizontal: 10,
    marginTop: 15,
    fontFamily: "Montserrat_400Regular",
    fontSize: 13,
  },
  time: {
    marginHorizontal: 10,
    marginTop: 5,
    fontFamily: "Montserrat_400Regular_Italic",
    fontSize: 9,
    color: "#6b6b6b",
    marginBottom: 10,
  },
  avatar: {
    height: 55,
    width: 55,

    marginLeft: 250,
  },
  tick: {
    width: 25,
    height: 25,
    marginLeft: 45,
  },
});

export default Post;
