import { Keyboard, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useRef } from 'react';

export function SearchTextInputBar() {
  const textInputRef = useRef<TextInput>(null);

  const handlePressOutside = () => {
    if (textInputRef.current?.isFocused()) {
      Keyboard.dismiss();
    } else {
      textInputRef.current?.focus();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View className='h-[40px] w-[362px] flex-row items-center rounded-[7px] bg-[#0A0A0A]'>
        <TextInput
          ref={textInputRef}
          placeholder='Pesquisar'
          placeholderTextColor={'#464646'}
          className='flex-1 pl-[11px] text-white'
        />
        <Feather name='search' size={24} color='white' className='pr-[12px]' />
      </View>
    </TouchableWithoutFeedback>
  );
}
