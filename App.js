import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Botao from './src/componentes/botão';

import Cabecalho from './src/componentes/cabecalho';
import Jogos from './src/componentes/jogos';
import Dados from "./src/dados/dadosjogos"

export default function App() {
  return (
    <View>

      <Cabecalho/>
        <Botao
        Logo="game-controller" 
        texto="Jogos"
        cor="green"
        Logo2= "book"
        texto2="Livros"
        cor2="blue"
        />

<Botao
        Logo="musical-note-outline" 
        texto="Musicas" 
        cor="red"
        Logo2="camera-sharp"
        texto2="Camera"
        cor2="purple"
        />

<Botao
        Logo="game-controller" 
        texto="Jogos"
        cor="blue"
        Logo2="calculator"
        texto2="Mensagem"
        cor2="pink"
        />


    <View>
    <FlatList
    horizontal={true}
    data = {Dados}
    keyExtractor = {(item) => item.id}
    renderItem = { ({item}) => (

      <Jogos
      titulo ={item.nome}
      imagem = {item.imagem}
      valor = {item.valor}
      />

    )}

    />
    </View>

    </View>
    );
    }