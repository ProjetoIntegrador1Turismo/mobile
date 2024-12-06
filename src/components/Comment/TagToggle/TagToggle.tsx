import React from 'react';
import { View } from 'react-native';
import { Tag } from 'src/components/Comment/TagToggle/Tag';
import { TagToggleProps } from 'src/components/Comment/TagToggle/TagToggle.types';
import { useTagToggleViewModel } from 'src/components/Comment/TagToggle/TagToggleViewModel';
import { CustomText } from 'src/components/Text/CustomText';

export function TagToggle({ title, tags, onTagsChange }: TagToggleProps) {
  const { selectedTags, toggleTag } = useTagToggleViewModel({ tags, onTagsChange });

  return (
    <View className='w-full px-4 items-center'>
      <CustomText className='mb-2 text-white' weight='bold'>
        {title}
      </CustomText>
      <View className='flex-row flex-wrap gap-2'>
        {tags.map((tag) => (
          <Tag
            key={tag}
            label={tag}
            isSelected={selectedTags.includes(tag)}
            onPress={() => toggleTag(tag)}
          />
        ))}
      </View>
    </View>
  );
}
