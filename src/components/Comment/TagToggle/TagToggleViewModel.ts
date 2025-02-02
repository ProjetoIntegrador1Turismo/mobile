import { useState } from 'react';

interface UseTagToggleViewModelProps {
  selected: boolean;
  onPress: () => void;
}

export function useTagToggleViewModel({ selected, onPress }: UseTagToggleViewModelProps) {
  const [isSelected, setIsSelected] = useState(selected);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onPress();
  };

  return {
    isSelected,
    handlePress,
  };
}
