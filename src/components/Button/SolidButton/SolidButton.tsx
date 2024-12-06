import { Pressable, View } from 'react-native';
import { SolidButtonProps } from 'src/components/Button/SolidButton/SolidButton.types';
import { CustomText } from 'src/components/Text/CustomText';
import { cn } from 'src/common/utils/cn';

const ButtonSizeMap: Record<string, string> = {
  sm: 'min-w-[30%]',
  md: 'min-w-[60%]',
  lg: 'min-w-[90%]',
};

const TextColorMap: Record<string, string> = {
  white: '#000',
  black: '#FFF',
};

export function SolidButton({
  title,
  size = 'sm',
  color = 'white',
  py = 4,
  onPress,
  className,
}: SolidButtonProps) {
  return (
    <Pressable onPress={onPress} className={className}>
      {({ pressed }) => (
        <View
          className={cn(
            `flex items-center justify-center rounded-xl`,
            `bg-${color}`,
            `py-${py}`,
            className
          )}>
          <CustomText color={TextColorMap[color]} weight='bold' size={14}>
            {title}
          </CustomText>
        </View>
      )}
    </Pressable>
  );
}
