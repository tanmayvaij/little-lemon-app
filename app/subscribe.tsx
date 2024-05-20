import { View, Text, Image, Pressable, StyleSheet, TextInput, Alert } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Subscribe = () => {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require("../assets/lemon.png")} />
      <Text style={styles.text}>
        Subscribe to our newslellter for our latest delicious recipes!
      </Text>
      <TextInput style={styles.input} inputMode="email" placeholder="Enter email" />
      <Pressable
        style={styles.button}
        onPress={() => alert("Thanks for subscribing stay tuned!")}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
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
    height: 240,
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
  input: {
    borderWidth: 1,
    width: 335,
    padding: 10,
    borderRadius: 4,
    borderColor: "gray"
  }
});

export default Subscribe;
