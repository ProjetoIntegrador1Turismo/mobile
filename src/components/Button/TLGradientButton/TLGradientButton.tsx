import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, View } from 'react-native';
import { colors } from 'src/common/utils/colors';
import { TLGradientButtonProps } from 'src/components/Button/TLGradientButton/TLGradientButton.types';
import { CustomText } from 'src/components/Text/CustomText';

// const ButtonSizeMap: Record<string, string> = {
//   sm: 'min-w-[40%]',
//   md: 'min-w-[60%]',
//   lg: 'min-w-[90%]',
// };

export function TLGradientButton({ title, className, onPress, disabled }: TLGradientButtonProps) {
  return (
    <Pressable className={className} onPress={onPress} disabled={disabled}>
      {({ pressed }) => (
        <LinearGradient
          style={{ borderRadius: 12 }}
          colors={
            pressed ? [colors.TLRedActive, colors.TLPurpleActive] : [colors.TlRed, colors.TlPurple]
          }
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}>
          <View className='flex min-h-[50px] items-center justify-center rounded-xl px-2 py-4'>
            <CustomText className='text-white' weight='bold' size={14}>
              {title}
            </CustomText>
          </View>
        </LinearGradient>
      )}
    </Pressable>
  );
}
