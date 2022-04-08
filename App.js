import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './src/componentes/botão';

import Cabecalho from './src/componentes/cabecalho';

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


    </View>

  );
}


