import { StyleSheet } from "react-native";

export const cores = {
    fundo: '#0B0B0D',
    superficie: '#17171B',
    borda: '#2A2A31',
    laranja: '#FF5A1F',
    laranjaClaro: '#FF8A3D',
    texto: '#FFFFFF',
    textoSuave: '#A6A6B0',
}

export const styles = StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: cores.fundo
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cores.fundo,
        padding: 20
    },
    titulo:{
        fontSize: 34,
        fontWeight: "bold",
        color: cores.texto,
        marginBottom: 10
    },
    descricao:{
        fontSize: 16,
        textAlign: "center",
        marginBottom: 24,
        lineHeight: 24,
        color: cores.textoSuave
    },
    logo:{
        width: 170,
        height: 170,
    },
});
