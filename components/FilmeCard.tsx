import { cores } from "@/styles/estilo";
import { useState } from "react";
import {
    Image,
    ImageSourcePropType,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

interface FilmeCardProps {
  titulo: string;
  genero: string;
  ano: number | string;
  imagem?: ImageSourcePropType;
  onPress?: (favorito: boolean) => void;
}

export default function FilmeCard({
  titulo,
  genero,
  ano,
  imagem,
  onPress,
}: FilmeCardProps) {
  const [favorito, setFavorito] = useState(false);

  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => onPress?.(favorito)}
        style={({ pressed }) => [pressed && styles.pressionado]}
        accessibilityRole="button"
        accessibilityLabel={`Ver detalhes de ${titulo}`}
      >
        <View style={styles.posterBox}>
          {imagem && (
            <Image source={imagem} style={styles.poster} resizeMode="cover" />
          )}
          <View style={styles.selo}>
            <Text style={styles.seloTexto}>{ano}</Text>
          </View>
          {favorito && (
            <View style={styles.estrela}>
              <Text style={styles.estrelaTexto}>★</Text>
            </View>
          )}
          <View style={styles.sombra} />
        </View>
        <Text style={styles.titulo} numberOfLines={2}>
          {titulo}
        </Text>
        <Text style={styles.genero} numberOfLines={1}>
          {genero}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setFavorito((atual) => !atual)}
        style={({ pressed }) => [
          styles.botaoFavorito,
          favorito && styles.botaoFavoritoAtivo,
          pressed && styles.botaoFavoritoPressionado,
        ]}
        accessibilityRole="button"
      >
        <Text
          style={[styles.textoFavorito, favorito && styles.textoFavoritoAtivo]}
        >
          {favorito ? "★ Favorito" : "☆ Favoritar"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 0,
    marginBottom: 16,
    padding: 9,
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 18,
    overflow: "hidden",
  },
  pressionado: { opacity: 0.82, transform: [{ scale: 0.985 }] },
  posterBox: {
    borderRadius: 12,
    overflow: "hidden",
    aspectRatio: 2 / 3,
    backgroundColor: "#222",
    position: "relative",
  },
  poster: { width: "100%", height: "100%" },
  sombra: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: "rgba(0,0,0,0.12)",
  },
  selo: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "rgba(8,8,10,0.82)",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 8,
  },
  seloTexto: { color: "#FFF", fontSize: 11, fontWeight: "800" },
  estrela: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: cores.laranja,
    alignItems: "center",
    justifyContent: "center",
  },
  estrelaTexto: { color: "#FFF", fontSize: 15 },
  titulo: {
    color: cores.texto,
    fontSize: 14,
    fontWeight: "800",
    marginTop: 11,
    minHeight: 36,
    lineHeight: 18,
  },
  genero: {
    color: cores.laranjaClaro,
    fontSize: 12,
    marginTop: 3,
    marginBottom: 12,
  },
  botaoFavorito: {
    minHeight: 37,
    paddingVertical: 9,
    paddingHorizontal: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#5A3325",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#211710",
  },
  botaoFavoritoAtivo: {
    backgroundColor: cores.laranja,
    borderColor: cores.laranja,
  },
  botaoFavoritoPressionado: { opacity: 0.65 },
  textoFavorito: { color: cores.laranjaClaro, fontWeight: "800", fontSize: 12 },
  textoFavoritoAtivo: { color: "#FFF" },
});
