import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require("../assets/lemon.png")} />
      <Text style={styles.text}>
        Little Lemon, your local mediterranean Bistro
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => router.push("subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  text: {
    color: "darkgreen",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "darkgreen",
    paddingHorizontal: 140,
    paddingVertical: 14,
    borderRadius: 4
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default Welcome;
