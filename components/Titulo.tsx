import { cores } from "@/styles/estilo";
import { StyleSheet, Text, useWindowDimensions } from "react-native";

interface TituloProps {
  texto: string;
}

export default function Titulo({ texto }: TituloProps) {
  const { width } = useWindowDimensions();
  return (
    <Text
      style={[
        styles.titulo,
        { fontSize: width < 380 ? 29 : width < 600 ? 34 : 40 },
      ]}
    >
      {texto}
    </Text>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: "900",
    color: cores.texto,
    letterSpacing: -1,
    textAlign: "center",
    marginBottom: 8,
  },
});
