import Checkbox from 'expo-checkbox';
import { FieldValues } from 'react-hook-form';
import { View } from 'react-native';
import { ControlledCheckboxProps } from 'src/components/Auth/ControlledCheckbox/ControlledCheckbox.types';
import { useControlledCheckboxViewModel } from 'src/components/Auth/ControlledCheckbox/ControlledCheckboxViewModel';
import { CustomText } from 'src/components/Text/CustomText';

export function ControlledCheckbox<T extends FieldValues>({
  label,
  control,
  name,
}: ControlledCheckboxProps<T>) {
  const { fieldValue, fieldOnChange } = useControlledCheckboxViewModel<T>({
    control,
    name,
  });

  return (
    <View className='flex flex-row gap-3'>
      <Checkbox color='#E10357' value={fieldValue} onValueChange={fieldOnChange} />
      <CustomText className='text-white'>{label}</CustomText>
    </View>
  );
}
