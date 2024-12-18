import { Keyboard, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useRef } from 'react';

interface SearchTextInputBarProps {
  onChangeText?: (search: string) => void;
  onSubmitEditing?: (search: string) => void;
}

export function SearchTextInputBar({ onChangeText, onSubmitEditing }: SearchTextInputBarProps) {
  const textInputRef = useRef<TextInput>(null);

  return (
    <TouchableWithoutFeedback>
      <View className='h-[40px] w-[362px] flex-row items-center rounded-[7px] bg-[#0A0A0A]'>
        <TextInput
          ref={textInputRef}
          placeholder='Pesquisar'
          placeholderTextColor={'#464646'}
          className='flex-1 pl-[11px] text-white'
          onChangeText={(text) => {
            if(onChangeText){
              onChangeText(text)
            }
          }}
          onSubmitEditing={(event) => {
            if (onSubmitEditing) {
              onSubmitEditing(event.nativeEvent.text); // Captura o texto do evento
            }
          }}
        />
        <Feather name='search' size={24} color='white' className='pr-[12px]' />
      </View>
    </TouchableWithoutFeedback>
  );
}
