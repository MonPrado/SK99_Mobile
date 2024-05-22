import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Logo from '../../assets/SK99.png';
import truck from '../../assets/truck.png';
import shapeElement from '../../assets/shape.png';
import rodinhas from '../../assets/rodinhas_element.png';

const vendas = {
  itens: [
    {
      nome: "Kit Element",
      imagem: Logo,
    },
    {
      nome: "Truck Element",
      imagem: truck,
    },
    {
      nome: "Shape Element",
      imagem: shapeElement,
    },
    {
      nome: "Rodinhas Element",
      imagem: rodinhas,
    },
  ]
};

const Vendas = () => {
  return (
    <View style={styles.container}>
      {vendas.itens.map((item, index) => (
        <Image key={index} source={item.imagem} style={styles.imagemProduto} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: '#fff',
  },
  imagemProduto: {
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 5,
  },
});

export default Vendas;
