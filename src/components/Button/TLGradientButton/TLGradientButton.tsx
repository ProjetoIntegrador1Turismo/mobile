import { LinearGradient } from 'expo-linear-gradient';
import { Pressable } from 'react-native';
import { colors } from 'src/common/utils/colors';
import { TLGradientButtonProps } from '~/src/components/Button/TLGradientButton/TLGradientButton.types';
import { CustomText } from 'src/components/Text/CustomText';

const ButtonSizeMap: Record<string, string> = {
  sm: 'min-w-[30%]',
  md: 'min-w-[60%]',
  lg: 'min-w-[90%]',
};

export function TLGradientButton({ title, size = 'sm' }: TLGradientButtonProps) {
  return (
    <Pressable className={ButtonSizeMap[size]}>
      {({ pressed }) => (
        <LinearGradient
          style={{ borderRadius: 12 }}
          colors={
            pressed ? [colors.TLRedActive, colors.TLPurpleActive] : [colors.TlRed, colors.TlPurple]
          }
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          className='flex items-center justify-center py-4'>
          <CustomText className='text-white' weight='bold' size={14}>
            {title}
          </CustomText>
        </LinearGradient>
      )}
    </Pressable>
  );
}
