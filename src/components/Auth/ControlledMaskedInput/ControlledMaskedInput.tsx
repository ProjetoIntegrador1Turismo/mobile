import { FieldValues } from 'react-hook-form';
import { View } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { ControlledMaskedInputProps } from 'src/components/Auth/ControlledMaskedInput/ControlledMaskedInput.types';
import { useControlledMaskedInputViewModel } from 'src/components/Auth/ControlledMaskedInput/ControlledMaskedInputViewModel';
import { InputError } from 'src/components/Auth/InputError/InputError';
import { CustomText } from 'src/components/Text/CustomText';

export function ControlledMaskedInput<T extends FieldValues>({
  label,
  placeholder,
  control,
  name,
  mask,
}: ControlledMaskedInputProps<T>) {
  const { fieldValue, errorMsg, fieldOnChange } = useControlledMaskedInputViewModel<T>({
    control,
    name,
  });

  return (
    <View className='flex gap-3'>
      <CustomText size={16} className='text-white'>
        {label}
      </CustomText>
      <View className='relative flex-row items-center'>
        <MaskInput
          value={fieldValue}
          onChangeText={fieldOnChange}
          className='min-w-[90%] rounded-xl bg-white px-4 py-4 font-poppins400'
          placeholder={placeholder}
          mask={mask}
        />
      </View>
      <InputError>{errorMsg}</InputError>
    </View>
  );
}
