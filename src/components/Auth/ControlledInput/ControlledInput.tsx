import { FieldValues } from 'react-hook-form';
import { View, TextInput } from 'react-native';
import { ControlledInputProps } from 'src/components/Auth/ControlledInput/ControlledInput.types';
import { useControlledInputViewModel } from 'src/components/Auth/ControlledInput/ControlledInputViewModel';
import { InputError } from 'src/components/Auth/InputError/InputError';
import { CustomText } from 'src/components/Text/CustomText';

export function ControlledInput<T extends FieldValues>({
  label,
  placeholder,
  control,
  name,
}: ControlledInputProps<T>) {
  const { fieldValue, errorMsg, fieldOnChange } = useControlledInputViewModel<T>({
    control,
    name,
  });

  return (
    <View className='flex gap-3'>
      <CustomText size={16} className='text-white'>
        {label}
      </CustomText>
      <TextInput
        value={fieldValue}
        onChangeText={fieldOnChange}
        className='min-w-[90%] rounded-xl bg-white px-3 py-4 font-poppins400'
        placeholder={placeholder}
      />
      <InputError>{errorMsg}</InputError>
    </View>
  );
}