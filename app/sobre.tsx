import Botao from "@/components/Botao";
import Card from "@/components/Card";
import { cores } from "@/styles/estilo";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

export default function Sobre() {
  return (

    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
      > 
      <Card>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.titulo}>CineApp</Text>

        <View style={styles.linha}>
          <Text style={styles.rotulo}>Finalidade</Text>
          <Text style={styles.valor}>O FenixFilmes foi desenvolvido para ser o catálogo de filmes mais completo e atualizado. Seu objetivo principal é oferecer uma experiência moderna para os usuários e organizar seus filmes favoritos em um só lugar.</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.rotulo}>Versão</Text>
          <Text style={styles.valor}>1.0.2</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.rotulo}>Última Atualização</Text>
          <Text style={styles.valor}>
          11/10/2026
          </Text>
        </View>

        <View style={{ alignSelf: "stretch", marginTop: 20 }}>
          <Botao texto="Voltar " onPress={() => router.back()} />
        </View>
      </Card>
      
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: cores.fundo,
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  titulo: {
    color: cores.texto,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 14,
  },
  linha: {
    alignSelf: "stretch",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: cores.borda,
  },
  rotulo: {
    color: cores.laranjaClaro,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  valor: {
    color: cores.texto,
    fontSize: 16,
    marginTop: 2,
  },
});
