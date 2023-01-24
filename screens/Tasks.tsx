import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "@rneui/base";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import { useDispatch } from "react-redux";
import { setStage } from "../src/store/user";
import axios from "axios";

const Item = ({ text, handlePress }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handlePress()}>
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
    </TouchableWithoutFeedback>
  );
};

const Tasks = ({ navigation, route }) => {
  // const [cats, setCats] = useState([]);
  const cats = [
    "Go on a walk",
    "Spend time with a loved one",
    "Take a hot bath",
    "Listen to a new song",
  ];
  const dispatch = useDispatch();
  const handlePress = async () => {
    await dispatch(setStage(1));
    navigation.popToTop();
  };

  // useEffect(() => {
  //   const handleFetch = async () => {
  //     await axios
  //       .get(`http://100.65.172.210:105/category/${route.params.id}`)
  //       .then((res) => {
  //         console.log("====================================");
  //         console.log(res.data);
  //         console.log("====================================");
  //         setCats(res.data);
  //       })
  //       .catch((e) => console.log(e));
  //   };
  //   handleFetch();
  // }, []);

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
        renderItem={({ item }) => (
          <Item handlePress={handlePress} text={item} />
        )}
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

export default Tasks;
function useSelector(arg0: (state: any) => any): { user: any } {
  throw new Error("Function not implemented.");
}
