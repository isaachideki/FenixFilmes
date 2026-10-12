import Botao from "@/components/Botao";
import FilmeCard from "@/components/FilmeCard";
import { filmes } from "@/constants/filmes";
import { cores } from "@/styles/estilo";
import { router } from "expo-router";
import { useEffect } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from "react-native";

export default function Catalogo() {
  const { width } = useWindowDimensions();
  const colunas = width >= 900 ? 5 : width >= 650 ? 4 : width >= 420 ? 3 : 2;

  useEffect(() => {
    console.log("Catálogo carregado");
  }, []);

  return (
    <View style={styles.tela}>
      <FlatList
        key={colunas}
        data={filmes}
        numColumns={colunas}
        contentContainerStyle={[
          styles.lista,
          { maxWidth: 1200, alignSelf: "center", width: "100%" },
        ]}
        columnWrapperStyle={colunas > 1 ? styles.linha : undefined}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.cabecalho}>
            <Text style={styles.filmeApp}>FENIXFILMES</Text>
            <Text style={styles.titulo}>Em cartaz</Text>
            <Text style={styles.subtitulo}>
              Explore histórias, descubra seu próximo filme favorito e confira
              os detalhes.
            </Text>
            <View style={styles.contagem}>
              <Text style={styles.contagemTexto}>
                 Filmes disponíveis
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <FilmeCard
            titulo={item.titulo}
            genero={item.genero}
            ano={item.ano}
            imagem={item.imagem}
            onPress={(favorito) =>
              router.push({
                pathname: "/detalhes",
                params: { id: item.id, favorito: favorito ? "1" : "0" },
              })
            }
          />
        )}
        ListFooterComponent={
          <View style={styles.rodape}>
            <Botao
              texto="Conheça o aplicativo"
              cor={cores.laranja}
              contorno
              onPress={() => router.push("/sobre")}
            />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  lista: { paddingHorizontal: 14, paddingBottom: 36 },
  linha: { gap: 8, alignItems: "stretch" },
  cabecalho: { paddingTop: 26, paddingBottom: 22, paddingHorizontal: 4 },
  filmeApp: {
    color: cores.laranjaClaro,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 10,
  },
  titulo: {
    color: cores.texto,
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: -0.8,
  },
  subtitulo: {
    color: cores.textoSuave,
    fontSize: 15,
    lineHeight: 23,
    marginTop: 8,
    maxWidth: 560,
  },
  contagem: {
    alignSelf: "flex-start",
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 30,
    backgroundColor: "#211710",
    borderWidth: 1,
    borderColor: "#4A2A1D",
  },
  contagemTexto: { color: cores.laranjaClaro, fontSize: 12, fontWeight: "700" },
  rodape: { paddingHorizontal: 4, paddingTop: 24 },
});
