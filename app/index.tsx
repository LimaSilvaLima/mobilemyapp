import { useEffect } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { activateKeepAwakeAsync } from "expo-keep-awake";
import { Stack } from "expo-router";

import { Text, View } from "@/components/Themed";
import { useColorScheme } from "@/components/useColorScheme";

// Garante que a Splash Screen não suma antes da lógica inicial rodar
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function WelcomeScreen() {
  useEffect(() => {
    if (__DEV__) {
      // Solução para o aviso de depreciação
      activateKeepAwakeAsync().catch(() => {});
    }

    SplashScreen.hideAsync().catch(() => {});
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.main}>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.subtitle}>
              Esta é a sua nova página inicial (index.tsx).
            </Text>

            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
