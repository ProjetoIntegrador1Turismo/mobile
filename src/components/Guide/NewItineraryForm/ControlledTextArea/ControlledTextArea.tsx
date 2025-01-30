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
      <View>
        <TextInput
          value={fieldValue}
          onChangeText={fieldOnChange}
          placeholder={placeholder}
          multiline
          editable={!disabled}
          className='w-[200px] min-w-[90%] max-w-[200px] rounded-xl bg-white px-4 py-4 font-poppins400'
          style={{
            height: 140, // Fixed height for 5 lines (approximately 28px per line)
            maxHeight: 140, // Ensure it doesn't grow
            textAlignVertical: 'top',
          }}
        />
      </View>
      <InputError>{errorMsg}</InputError>
    </View>
  );
}
