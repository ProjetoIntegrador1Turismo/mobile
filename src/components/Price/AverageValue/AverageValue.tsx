import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { View } from 'react-native';
import { AverageValueProps } from './AverageValue.types';
import { useAverageValueIcons } from './AverageValueViewModel';

export function AverageValue({ value }: AverageValueProps) {
  const icons = useAverageValueIcons(value);

  return (
    <>
      {icons.map((_, index) => (
        <FontAwesome6 key={index} name='dollar-sign' size={16} color='white' />
      ))}
    </>
  );
}
