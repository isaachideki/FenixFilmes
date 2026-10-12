import { cores } from "@/styles/estilo";
import { Pressable, StyleSheet, Text } from "react-native";

interface BotaoProps {
  texto: string;
  onPress: () => void;
  cor?: string;
  contorno?: boolean;
}

export default function Botao({
  texto,
  onPress,
  cor = cores.laranja,
  contorno = false,
}: BotaoProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.botao,
        contorno
          ? {
              borderWidth: 1.5,
              borderColor: cor,
              backgroundColor: "transparent",
            }
          : { backgroundColor: cor, borderWidth: 1.5, borderColor: cor },
        pressed && styles.botaoPressionado,
      ]}
    >
      <Text style={[styles.texto, contorno && { color: cor }]}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    minHeight: 50,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  texto: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.2,
    textAlign: "center",
  },
  botaoPressionado: { opacity: 0.75, transform: [{ scale: 0.985 }] },
});
