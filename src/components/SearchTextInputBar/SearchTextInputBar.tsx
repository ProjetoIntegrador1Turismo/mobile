import { Keyboard, TextInput, TouchableWithoutFeedback, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useRef } from "react";


export function SearchTextInputBar(){
    const textInputRef = useRef<TextInput>(null);

    const handleFocus = () => {
        textInputRef.current?.focus();
    };

    const handlePressOutside = () => {
        if (textInputRef.current?.isFocused()) {
          Keyboard.dismiss(); // Fecha o teclado se o TextInput estiver focado
        } else {
          textInputRef.current?.focus(); // Foca no TextInput se não estiver focado
        }
    };


    return (
        <TouchableWithoutFeedback onPress={handlePressOutside}> 
        <View className='flex-row items-center w-[362px] h-[40px] bg-[#0A0A0A] rounded-[7px] mt-[72px]'>
            <TextInput
            ref={textInputRef} 
            placeholder='Pesquisar'
            placeholderTextColor={'#464646'}
            className='flex-1 pl-[11px] text-white'
            />
            <Feather name='search' size={24} color='white' className='pr-[12px]'/>
        </View>
        </TouchableWithoutFeedback>
    )
}