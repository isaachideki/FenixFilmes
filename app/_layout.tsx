import { cores } from "@/styles/estilo";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: cores.fundo },
        headerTintColor: cores.laranja,
        headerTitleStyle: { color: cores.texto },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: cores.fundo },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen name="catalogo" options={{ title: "Explore o Catálogo" }} />

      <Stack.Screen name="detalhes" options={{ title: "Detalhes" }} />

      <Stack.Screen name="sobre" options={{ title: "Sobre" }} />
    </Stack>
  );
}
