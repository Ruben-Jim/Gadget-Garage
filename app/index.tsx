
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    paddingHorizontal: 20,
    fontFamily: "System",
  },
});

export default Index;
