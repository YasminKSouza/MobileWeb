import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-web';


const Exercicio3 = () => {
    const [texto, setTexto] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="Digite algo..."
      value={texto}
      onChangeText={setTexto}
      />
      <Text style={styles.resultado}>Você digitou: {texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginTop: 50,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    resultado: {
      fontSize: 18,
    },
  });
  

export default Exercicio3