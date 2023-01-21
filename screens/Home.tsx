import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Home</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efebf7",
  },
});

export default Home;
