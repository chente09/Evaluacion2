import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { TittleComponents } from '../components/TittleComponents'
import { stylesGlobal } from '../theme/appTheme'


interface Props extends StackScreenProps<any, any> { };

export const HomeScreen = ({ navigation }: Props) => {

    return (
        <View>
            <View style={{marginTop:'20%' }}>
                <TittleComponents title='BIENVENIDO' />
            </View>
            <View style={{alignItems: 'center', position:'relative', marginTop:'30%'  }}>
            
                <TouchableOpacity style={stylesGlobal.touchTheme}
                    onPress={() => navigation.navigate('Imagen1Screen')}>
                    <Text style={stylesGlobal.textDescription}>IMAGEN 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesGlobal.touchTheme}
                    onPress={() => navigation.navigate('Imagen2Screen')}>
                    <Text style={stylesGlobal.textDescription}>IMAGEN 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesGlobal.touchTheme}
                    onPress={() => navigation.navigate('MayorScreen')}>
                    <Text style={stylesGlobal.textDescription}>MAYOR O IGUAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesGlobal.touchTheme}
                    onPress={() => navigation.navigate('MenorScreen')}>
                    <Text style={stylesGlobal.textDescription}>MENOR O IGUAL</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
