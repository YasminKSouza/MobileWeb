import { View, Text, Button} from 'react-native'
import React from 'react'
import { useState } from 'react'


const Exercicio2 = () => {

const [contador, setContador] = useState(0)

function incrementar(){
    setContador(contador+1)

}

function decrementar (){
    setContador(contador-1)

}

  return (
    <View>
    <Button title="incrementar" onPress={incrementar} />
    <Button title="decrementar" onPress={decrementar} />
    <Text>O contador está em: {contador}</Text>
    </View>
  )
}

export default Exercicio2