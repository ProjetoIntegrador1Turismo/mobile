import { View } from 'react-native';
import { AuthFormHeaderProps } from 'src/components/Auth/AuthFormHeader/AuthFormHeader.types';
import { CustomText } from 'src/components/Text/CustomText';

export function AuthFormHeader({ label, title }: AuthFormHeaderProps) {
  return (
    <View>
      <CustomText className='text-white' size={36} weight='bold'>
        {title}
      </CustomText>
      <CustomText size={16} className='text-white'>
        {label}
      </CustomText>
    </View>
  );
}
