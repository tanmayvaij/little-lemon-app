import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Welcome", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="subscribe"
        options={{ headerTitle: "Subscribe", headerTitleAlign: "center" }}
      />
    </Stack>
  );
}
