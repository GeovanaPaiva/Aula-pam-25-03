import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './src/componentes/botão';

import Cabecalho from './src/componentes/cabecalho';

export default function App() {
  return (
    <View>

      <Cabecalho/>
        <Botao
        logo="game-controller" 
        texto="Jogos"
        cor="green"
        Logo2= "game-controller"
        texto2="Meus jogos"
        cor2="blue"
        />

    </View>

  );
}


