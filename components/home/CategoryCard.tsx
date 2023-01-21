import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Image } from "@rneui/base";

const cats = [
  {
    img: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674330886/re-new/Mask_group_xgghvc.png",
    text: "Fitness",
  },
  {
    img: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674330886/re-new/Mask_group_2_brgyq9.png",
    text: "Skill",
  },
  {
    img: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674330886/re-new/Mask_group_1_mrfict.png",
    text: "Academics",
  },
  {
    img: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674330885/re-new/Ellipse_5_ve7pmc.png",
    text: "Wellness",
  },
];

const Item = ({ text, img }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: img }} />
      <Text style={{ textAlign: "center" }}>{text}</Text>
    </View>
  );
};

const CategoryCard = () => {
  return (
    <View>
      <FlatList
        data={cats}
        renderItem={({ item }) => <Item text={item.text} img={item.img} />}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    shadowColor: "#dfdfdf",
    shadowOpacity: 35,
    backgroundColor: "#fff",
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
});

export default CategoryCard;
