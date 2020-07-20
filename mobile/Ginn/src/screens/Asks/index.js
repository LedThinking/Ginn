import React, { useState, useEffect } from 'react';

import { FlatList, View, Image, Text } from 'react-native';
import { Appbar, List } from 'react-native-paper';

import Ginn from '../../assets/Ginn.png'

import styles from './style';


const Asks = () => {

  const [asks, setAsks] = useState([]);

  const listAsks = [
    {
      title: {
        name: "Vestido vermelho"
      },
      usuario: {
        name: "joao"
      },
      description: {
        description: "Você faz frete"
      },
      image: {
        vestido: require('../../assets/vestido.png')
      },
      id: 1,
    },
    {
      title: {
        name: "Calça Azul"
      },
      usuario: {
        name: "joana"
      },
      description: {
        description: "Você vende por demanda e faz desconto"
      },
      image: {
        calca: require('../../assets/calca.png')
      },
      id: 2,
    },
    {
      title: {
        name: "Vestido vermelho"
      },
      usuario: {
        name: "Liggia"
      },
      description: {
        description: "Você vende por demanda e faz desconto"
      },
      image: {
        vestido: require('../../assets/vestido.png')
      },
      id: 3,
    },
    {
      title: {
        name: "Vestido vermelho"
      },
      usuario: {
        name: "Pedro"
      },
      description: {
        description: "Você vende por demanda e faz desconto"
      },
      image: {
        vestido: require('../../assets/vestido.png')
      },
      id: 4,
    },
    {
      title: {
        name: "Short azul"
      },
      usuario: {
        name: "Clebson"
      },
      description: {
        description: "Você vende por demanda e faz desconto"
      },
      image: {
        short: require('../../assets/short.png')
      },
      id: 5,
    },
  ]

  function loadAsks() {
    const response = listAsks;
    setAsks([...asks, ...response]);
  }

  useEffect(() => {
    loadAsks();
  }, []);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Perguntas" />
      </Appbar.Header>
      <Image
        source={Ginn}
        style={styles.image}
      />
      <View style={styles.text}>
        <Text style={styles.textPrimary}>Até tentei mestre</Text>
        <Text style={styles.textSecondary}>...</Text>
      </View>
      <FlatList
        style={styles.listContent}
        showsVerticalScrollIndicator={false}
        data={asks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.title.name}
            description={`@${item.usuario.name} - ${item.description.description}`}
            left={props => <Image {...props} style={styles.icon} source={item.image.vestido} />}
          />
        )}
      />
    </View>
  )
}

export default Asks;