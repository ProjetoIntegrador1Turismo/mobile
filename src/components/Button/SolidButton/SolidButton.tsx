import { Pressable, View } from 'react-native';
import { SolidButtonProps } from 'src/components/Button/SolidButton/SolidButton.types';
import { CustomText } from 'src/components/Text/CustomText';

const TextColorMap: Record<string, string> = {
  white: '#000',
  black: '#FFF',
};

export function SolidButton({
  title,
  size = 'sm',
  color = 'white',
  onPress,
  className,
}: SolidButtonProps) {
  return (
    <Pressable onPress={onPress} className={className}>
      {({ pressed }) => (
        <View
          className={`flex items-center justify-center rounded-xl py-4 bg-${color} ${
            pressed ? 'opacity-75' : 'opacity-100'
          }`}>
          <CustomText color={TextColorMap[color]} weight='bold' size={14}>
            {title}
          </CustomText>
        </View>
      )}
    </Pressable>
  );
}
