import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

const ProfileCard = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/Rectangle 5.png")}
    >
      <Text>ProfileCard</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 100,
  },
});

export default ProfileCard;
