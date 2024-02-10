import { createStackNavigator } from '@react-navigation/stack';
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../../commons/constantsColor';
import { Imagen1Screen } from '../Imagen1Screen';
import { HomeScreen } from '../HomeScreen';
import { Imagen2Screen } from '../Imagen2Screen';
import { MayorScreen } from '../MayorScreen';
import { MenorScreen } from '../MenorScreen';
const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
            backgroundColor: PRIMARY_COLOR
        }
    }}>
      <Stack.Screen name="HomeScreen"  options={{headerShown:false,}} component={HomeScreen} />
      <Stack.Screen name="Imagen1Screen" options={{headerShown:false,}} component={Imagen1Screen} />
      <Stack.Screen name="Imagen2Screen" options={{headerShown:false,}}  component={Imagen2Screen} />
      <Stack.Screen name="MayorScreen" options={{headerShown:false,}} component={MayorScreen} />
      <Stack.Screen name="MenorScreen" options={{headerShown:false,}} component={MenorScreen} />
      
    </Stack.Navigator>
  );
}