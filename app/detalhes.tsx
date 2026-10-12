import Botao from "@/components/Botao";
import { filmes } from "@/constants/filmes";
import { cores } from "@/styles/estilo";
import { router, useLocalSearchParams } from "expo-router";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from "react-native";

export default function Detalhes() {
  // Aqui recebe o id e o status de favorito enviados pela tela do catálogo
  const { id, favorito } = useLocalSearchParams();
  const { width } = useWindowDimensions();
  const filme = filmes.find((f) => f.id === id);

  if (!filme) {
    return (
      <View style={styles.vazio}>
        <Text style={styles.titulo}>Filme não encontrado</Text>
        <Botao texto="Voltar" onPress={() => router.back()} />
      </View>
    );
  }

  const ehFavorito = favorito === "1";

  return (
    <View style={styles.tela}>
      {/* Fundo: o próprio pôster desfocado */}
      <Image
        source={filme.imagem}
        style={StyleSheet.absoluteFill}
        blurRadius={30}
      />
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(8,8,10,0.82)" },
        ]}
      />

      <ScrollView
        contentContainerStyle={[
          styles.conteudo,
          {
            width: "100%",
            maxWidth: 760,
            alignSelf: "center",
            paddingHorizontal: width < 380 ? 16 : 24,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={filme.imagem}
          style={[styles.poster]}
        />

        <Text style={[styles.titulo, { fontSize: width < 380 ? 24 : 30 }]}>
          {filme.titulo}
        </Text>

        <View style={styles.chips}>
          <View style={[styles.chip, { borderColor: cores.laranja }]}>
            <Text style={[styles.chipTexto, { color: cores.laranjaClaro }]}>  
              {filme.genero}
            </Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipTexto}>{filme.ano}</Text>
          </View>
          <View
            style={[
              styles.chip,
              ehFavorito && {
                backgroundColor: cores.laranja,
                borderColor: cores.laranja,
              },
            ]}
          >
            <Text style={styles.chipTexto}>
              {ehFavorito ? "★ Favorito" : "☆ Não favoritado"}
            </Text>
          </View>
        </View>

        <View style={styles.sinopseBox}>
          <Text style={styles.sinopseTitulo}>Sinopse</Text>
          <Text style={styles.sinopse}>{filme.sinopse}</Text>
        </View>

        <Botao texto="Voltar ao catálogo" onPress={() => router.back()} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  vazio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cores.fundo,
    padding: 24,
    gap: 16,
  },
  conteudo: {
    alignItems: "center",
    padding: 24,
    paddingBottom: 40,
  },
  poster: {
    width: 220,
    height:300,
    aspectRatio: 2 / 3,
    borderRadius: 20,
    marginBottom: 22,
    shadowColor: cores.laranja,
    shadowOpacity: 0.5,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
    elevation: 14,
  },
  titulo: {
    color: cores.texto,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 14,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginBottom: 20,
  },
  chip: {
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: "rgba(255,255,255,0.06)",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  chipTexto: {
    color: cores.texto,
    fontSize: 14,
    fontWeight: "600",
  },
  sinopseBox: {
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 18,
    padding: 18,
    marginBottom: 24,
  },
  sinopseTitulo: {
    color: cores.laranjaClaro,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  sinopse: {
    color: cores.texto,
    fontSize: 16,
    lineHeight: 24,
  },
});
