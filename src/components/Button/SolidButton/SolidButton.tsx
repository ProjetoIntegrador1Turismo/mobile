import { Pressable, View } from 'react-native';
import { SolidButtonProps } from '~/src/components/Button/SolidButton/SolidButton.types';
import { CustomText } from 'src/components/Text/CustomText';

const ButtonSizeMap: Record<string, string> = {
  sm: 'min-w-[30%]',
  md: 'min-w-[60%]',
  lg: 'min-w-[90%]',
};

const TextColorMap: Record<string, string> = {
  white: '#000',
  black: '#FFF',
};

export function SolidButton({ title, size = 'sm', color = 'white', onPress }: SolidButtonProps) {
  return (
    <Pressable className={ButtonSizeMap[size]} onPress={onPress}>
      {({ pressed }) => (
        <View className={`flex items-center justify-center rounded-xl bg-${color} py-4 `}>
          <CustomText color={TextColorMap[color]} weight='bold' size={14}>
            {title}
          </CustomText>
        </View>
      )}
    </Pressable>
  );
}
