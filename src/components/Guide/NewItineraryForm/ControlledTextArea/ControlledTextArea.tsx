import { FieldValues } from 'react-hook-form';
import { View, TextInput } from 'react-native';
import { InputError } from 'src/components/Auth/InputError/InputError';
import { ControlledTextAreaProps } from 'src/components/Guide/NewItineraryForm/ControlledTextArea/ControlledTextArea.types';
import { useControlledTextAreaViewModel } from 'src/components/Guide/NewItineraryForm/ControlledTextArea/ControlledTextAreaViewModel';
import { CustomText } from 'src/components/Text/CustomText';

export function ControlledTextArea<T extends FieldValues>({
  label,
  placeholder,
  control,
  name,
  password,
  disabled,
}: ControlledTextAreaProps<T>) {
  const { fieldValue, errorMsg, fieldOnChange } = useControlledTextAreaViewModel<T>({
    control,
    name,
  });

  return (
    <View className='flex gap-3'>
      <CustomText size={16} className='text-white'>
        {label}
      </CustomText>
      <View className='relative flex-row items-center'>
        <TextInput
          multiline
          numberOfLines={5}
          value={fieldValue}
          onChangeText={fieldOnChange}
          className='w-[90%] min-w-[90%] max-w-[90%] rounded-xl bg-white px-4 py-4 font-poppins400'
          placeholder={placeholder}
          editable={!disabled}
        />
      </View>
      <InputError>{errorMsg}</InputError>
    </View>
  );
}
