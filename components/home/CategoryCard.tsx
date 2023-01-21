import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
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

const Item = ({ text, img, handlePress }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={() => handlePress(text)}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: img }} />
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Montserrat_400Regular",
            marginTop: 5,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const CategoryCard = ({ handlePress }) => {
  return (
    <View>
      <FlatList
        data={cats}
        renderItem={({ item }) => (
          <Item text={item.text} img={item.img} handlePress={handlePress} />
        )}
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
    height: 55,
    resizeMode: "contain",
  },
});

export default CategoryCard;
