import Botao from "@/components/Botao";
import Titulo from "@/components/Titulo";
import { cores } from "@/styles/estilo";
import { router } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { width, height } = useWindowDimensions();
  const compacto = width < 380 || height < 700;
  const posterLado = Math.min(105, width * 0.25);
  const posterCentro = Math.min(136, width * 0.34);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.container,
            {
              maxWidth: 760,
              width: "100%",
              alignSelf: "center",
              paddingVertical: compacto ? 18 : 34,
            },
          ]}
        >
          <View style={[styles.leque, { height: compacto ? 175 : 220 }]}>
            <Image
              source={require("../assets/images/filme3.jpg")}
              style={[
                styles.posterLado,
                {
                  width: posterLado,
                  height: posterLado * 1.5,
                  transform: [{ rotate: "-9deg" }, { translateY: 12 }],
                },
              ]}
            />
            <Image
              source={require("../assets/images/filme7.jpg")}
              style={[
                styles.posterCentro,
                { width: posterCentro, height: posterCentro * 1.5, zIndex: 2 },
              ]}
            />
            <Image
              source={require("../assets/images/filme5.jpg")}
              style={[
                styles.posterLado,
                {
                  width: posterLado,
                  height: posterLado * 1.5,
                  transform: [{ rotate: "9deg" }, { translateY: 12 }],
                },
              ]}
            />
          </View>

          <Image
            source={require("../assets/images/logo.png")}
            style={[
              styles.logo,
              { width: compacto ? 82 : 100, height: compacto ? 82 : 100 },
            ]}
            resizeMode="contain"
          />
          <Titulo texto="FenixFilmes" />

          <View style={styles.acoes}>
            <Botao
              texto="Descubra os Filmes   →"
              onPress={() => router.push("/catalogo")}
            />
            <Pressable
              onPress={() => router.push("/sobre")}
              style={({ pressed }) => [
                styles.link,
                pressed && { opacity: 0.55 },
              ]}
              accessibilityRole="button"
            >
              <Text style={styles.linkTexto}>Conheça o aplicativo</Text>
            </Pressable>
          </View>
          <Text style={styles.rodape}>DESCUBRA • ASSISTA • FAVORITE</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: cores.fundo },
  scroll: { flexGrow: 1, paddingHorizontal: 18 },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#4A2A1D",
    backgroundColor: "#211710",
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  ponto: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: cores.laranja,
  },
  pillTexto: {
    color: cores.laranjaClaro,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  leque: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  posterLado: {
    borderRadius: 13,
    marginHorizontal: -8,
    borderWidth: 1,
    borderColor: cores.borda,
    opacity: 0.82,
  },
  posterCentro: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: cores.laranja,
    shadowColor: cores.laranja,
    shadowOpacity: 0.28,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  logo: { marginTop: 8, marginBottom: 3 },
  descricao: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
    lineHeight: 24,
    color: cores.textoSuave,
    maxWidth: 460,
    paddingHorizontal: 8,
  },
  acoes: { width: "100%", maxWidth: 360 },
  link: { marginTop: 12, padding: 12, alignItems: "center" },
  linkTexto: { color: cores.texto, fontSize: 14, fontWeight: "600" },
  rodape: {
    color: "#656570",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
    marginTop: 24,
  },
});
