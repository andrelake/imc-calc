import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import ResultImc from './resultImc';

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha peso e altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular Imc');

    function imcCalculator() {
        return setImc((weight/(height * height)).toFixed(2));
    }

    function validate() {
        if (weight!=null & height!=null) {
            imcCalculator();
            resetFields();
            setMessageImc("Seu IMC é igual a: ")
            setTextButton("Calcular novamente")
            return
        }

        setImc(null);
        setTextButton("Calcular Imc");
        setMessageImc("Preencha peso e altura")
    }
    
    function resetFields() {
        setHeight(null);
        setWeight(null);
    }

  return (
    <View>
        <View>
            <Text>Altura:</Text>
            <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder='Ex. 1.87(m.cm)'
                keyboardType='numeric'
            ></TextInput>

            <Text>Peso:</Text>
            <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex. 85(kgs)'
                keyboardType='numeric'
            ></TextInput>

            <Button
                onPress={() => validate()}
                title={textButton}
            />
        </View>

        <ResultImc
            messageResultImc={messageImc}
            resultImc={imc}
        ></ResultImc>
    </View>
  );
}