import React from 'react'
import { Image, Text, View } from 'react-native'
import { TittleComponents } from '../components/TittleComponents'
import { ButtonComponent } from '../components/ButtonComponent'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> { };

export const Imagen1Screen = ({navigation}:Props) => {
  return (
    <View>
      <ButtonComponent title='◀ Volver a HOME' onPress={() => navigation.navigate('HomeScreen')}/>
      <TittleComponents title='IMAGEN 1'/>
      <Image
        source={{
          uri: 'https://img.pikbest.com/origin/09/21/73/812pIkbEsTiuU.jpg!w700wp',
          cache: 'only-if-cached',
        }}
        style={{ width: 430, height: 650 }}
      />
    </View>
  )
}
