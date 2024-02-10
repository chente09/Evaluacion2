import React from 'react'
import { Image, Text, View } from 'react-native'
import { TittleComponents } from '../components/TittleComponents'
import { ButtonComponent } from '../components/ButtonComponent'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> { };

export const Imagen2Screen = ({navigation}:Props) => {
    return (
        <View>
            <ButtonComponent title='◀ Volver a HOME' onPress={() => navigation.navigate('HomeScreen')}/>
            <TittleComponents title='IMAGEN 2' />
            <Image
                source={{
                    uri: 'https://as1.ftcdn.net/v2/jpg/06/20/96/08/1000_F_620960888_1l11aKVuLrMwPjBd3fVPhScbHPHvYlpY.jpg',
                    cache: 'only-if-cached',
                }}
                style={{ width: 420, height: 650 }}
            />
        </View>
    )
}
