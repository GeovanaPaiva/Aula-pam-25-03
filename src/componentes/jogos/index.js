import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export default function Jogos({ titulo, valor, imagem }){
    return (
        <TouchableOpacity Style={estilo.containerJogos}>
            <Image
            style={estilo.imagens}
            source={require(`../../imagens/${imagem}`)}
            />

            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.valor}>{valor}</Text>
        </TouchableOpacity>

    );
}

const estilo = StyleSheet.create({
    containerJogos: {
        backgroundColor:"#DCDCDC",
        borderRadius: 10,
        marginTop:8,
        padding: 10,
        margin: 2,
        alignItens: "center",
        justifyContent: "space-between",
        width: 100,
        height: 150,
        marginLeft: 8,

    },
    titulo: {
        color: "green",
        frontSise: 12,
        fontWeight:"bold",    
    },
    valor:{
        color: "black",
        fontSize: 12,
        frontweight:"bold",

    },
    imagens: {
        width:"100%",
        height:75,
        borderRadius:3,
        
    },

});