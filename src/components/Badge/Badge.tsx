import { View } from 'react-native';
import { CustomText } from '../Text/CustomText';

interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <View className="self-start rounded-md bg-white px-2 py-0.5">
      <CustomText size={12} weight="regular" className="text-black">
        {label}
      </CustomText>
    </View>
  );
}
