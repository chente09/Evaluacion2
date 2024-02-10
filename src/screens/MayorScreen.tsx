import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent'
import { stylesGlobal } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { };
export const MayorScreen = ({ navigation }: Props) => {

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState('');

    const handlerSendInfo = () => {
        if (numero1 > numero2) {
            setResultado(`El número ${numero1} es mayor que ${numero2}`);
        } else if (numero2 > numero1) {
            setResultado(`El número ${numero2} es mayor que ${numero1}`);
        } else if (numero2 ==0 || numero1==0) {
            setResultado('Primero debes ingresar dos números');
        } else {
            setResultado('Los dos números son iguales');
        }
    }
    return (
        <View>
            <ButtonComponent title='◀ Volver a HOME' onPress={() => navigation.navigate('HomeScreen')} />
            <View style={{ alignItems: 'center', height:'90%',justifyContent:'space-evenly' }}>
                <Text style={stylesGlobal.textDescription}>Ingresa dos números</Text>
                <TextInput
                    style={stylesGlobal.formNumer}
                    placeholder='número'
                    keyboardType='numeric'
                    onChangeText={(numero: string) => setNumero1(parseInt(numero))} />
                <TextInput
                    style={stylesGlobal.formNumer}
                    placeholder='número'
                    keyboardType='numeric'
                    onChangeText={(numero: string) => setNumero2(parseInt(numero))} />
                <ButtonComponent title='VERIFICAR' onPress={handlerSendInfo} />
                <Text style={stylesGlobal.textDescription}>{resultado}</Text>
            </View>
        </View>
    )
}
