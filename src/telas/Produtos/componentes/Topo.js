import React from 'react';
import { StyleSheet, View, Dimensions, Image, StatusBar, SafeAreaView } from 'react-native';

import Header from '../../../../assets/logotipo.png'
import Texto from '../../../componentes/Texto.js'

//Captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
  return <SafeAreaView>
    <StatusBar />
    <Image source={Header} style={styles.topo} />
    <Texto style={styles.titulo}>{titulo}</Texto>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  topo: {
    width: 150,
    height: 150,
    flex: 1,
    marginBottom: 0,
    alignSelf: "center",
    resizeMode: "contain",
  },

  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "right",
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    paddingTop: 70,
  },
});