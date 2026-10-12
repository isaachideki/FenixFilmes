import { cores } from "@/styles/estilo";
import React from "react";
import { StyleSheet, View } from "react-native";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    padding: 24,
    borderRadius: 24,
    alignItems: "center",
    alignSelf: "stretch",
  },
});
