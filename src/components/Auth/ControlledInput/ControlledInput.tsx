import { Feather } from '@expo/vector-icons';
import { FieldValues } from 'react-hook-form';
import { View, TextInput, Pressable } from 'react-native';
import { ControlledInputProps } from 'src/components/Auth/ControlledInput/ControlledInput.types';
import { useControlledInputViewModel } from 'src/components/Auth/ControlledInput/ControlledInputViewModel';
import { InputError } from 'src/components/Auth/InputError/InputError';
import { CustomText } from 'src/components/Text/CustomText';

export function ControlledInput<T extends FieldValues>({
  label,
  placeholder,
  control,
  name,
  password,
  disabled,
  numeric,
}: ControlledInputProps<T>) {
  const { fieldValue, errorMsg, fieldOnChange, showPassword, togglePasswordVisibility } =
    useControlledInputViewModel<T>({
      control,
      name,
    });

  const handleTextChange = (text: string) => {
    if (numeric) {
      const numericValue = text.replace(/[^0-9]/g, '');
      fieldOnChange(numericValue);
    } else {
      fieldOnChange(text);
    }
  };

  return (
    <View className='flex gap-3'>
      <CustomText size={16} className='text-white'>
        {label}
      </CustomText>
      <View className='relative flex-row items-center'>
        <TextInput
          value={fieldValue}
          onChangeText={handleTextChange}
          className={`min-w-[90%] max-w-[200px] rounded-xl bg-white font-poppins400 ${
            password ? 'pl-4 pr-14' : 'px-4'
          } py-4`}
          style={{
            height: 56, // Fixed height
            maxHeight: 56, // Ensure it doesn't grow
          }}
          placeholder={placeholder}
          secureTextEntry={password && !showPassword}
          editable={!disabled}
          keyboardType={numeric ? 'numeric' : 'default'}
        />
        {password && (
          <Pressable onPress={togglePasswordVisibility} className='absolute right-4'>
            {showPassword ? (
              <Feather name='eye-off' size={24} color='#666' />
            ) : (
              <Feather name='eye' size={24} color='#666' />
            )}
          </Pressable>
        )}
      </View>
      <InputError>{errorMsg}</InputError>
    </View>
  );
}
