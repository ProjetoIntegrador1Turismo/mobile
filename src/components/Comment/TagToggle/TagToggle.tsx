import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CustomText } from 'src/components/Text/CustomText';
import { TagToggleProps } from './TagToggle.types';
import { useTagToggleViewModel } from './TagToggleViewModel';

export function TagToggle({ label, selected, onPress }: TagToggleProps) {
  const { isSelected, handlePress } = useTagToggleViewModel({ selected, onPress });

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`rounded-full px-4 py-2 ${isSelected ? 'bg-pink-600' : 'bg-zinc-800'}`}>
      <CustomText className='text-white' size={14} weight='regular'>
        {label}
      </CustomText>
    </TouchableOpacity>
  );
}
