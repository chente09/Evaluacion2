import { TextInput, View } from 'react-native'


interface formNumerProps {
    placeholder: string;
    name: string;
    onChangeText: (name: string, value: string) => void;
}

export const FormNumer = ({ placeholder, name, onChangeText }: formNumerProps) => {

    return (
        <View>
            <TextInput
                style={{color:'white'}}
                placeholder={placeholder}
                keyboardType='numeric'
                onChangeText={(value: string) => onChangeText(name, value)} />
        </View>
    )
}

