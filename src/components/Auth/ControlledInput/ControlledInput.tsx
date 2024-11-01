import { View, TextInput } from 'react-native';
import { ControlledInputProps } from 'src/components/Auth/ControlledInput/ControlledInput.types';
import { InputError } from 'src/components/Auth/InputError/InputError';
import { CustomText } from 'src/components/Text/CustomText';

export function ControlledInput({ label, placeholder, error }: ControlledInputProps) {
  return (
    <View className='flex gap-3'>
      <CustomText size={16} className='text-white'>
        {label}
      </CustomText>
      <TextInput
        className='min-w-[90%] rounded-xl bg-white px-3 py-4 font-poppins400'
        placeholder={placeholder}
      />
      <InputError>{error}</InputError>
    </View>
  );
}
