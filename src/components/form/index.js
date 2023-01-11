import { Button, Text, TextInput, View } from 'react-native';
import ResultImc from './resultImc';

export default function Form() {

  return (
    <View>
        <View>
            <Text>Altura:</Text>
            <TextInput
                placeholder='Ex. 187(cm)'
                keyboardType='numeric'
            ></TextInput>

            <Text>Peso:</Text>
            <TextInput
                placeholder='Ex. 85(kgs)'
                keyboardType='numeric'
            ></TextInput>

            <Button title='Calcular IMC'/>
        </View>

        <ResultImc
            // messageResultImc={messageImc}
            // resultImc={imc}
        ></ResultImc>
    </View>
  );
}