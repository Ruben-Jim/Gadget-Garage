
import React from "react";
import { Text, View, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
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
  },
});

const Index: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
};

export default Index;
