import { useState, useCallback } from 'react';
import { TagToggleViewModelProps } from 'src/components/Comment/TagToggle/TagToggle.types';

export function useTagToggleViewModel({ tags, onTagsChange }: TagToggleViewModelProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = useCallback(
    (tag: string) => {
      setSelectedTags((prevTags) => {
        const newTags = prevTags.includes(tag)
          ? prevTags.filter((t) => t !== tag)
          : [...prevTags, tag];

        onTagsChange?.(newTags);
        return newTags;
      });
    },
    [onTagsChange]
  );

  return {
    selectedTags,
    toggleTag,
  };
}
