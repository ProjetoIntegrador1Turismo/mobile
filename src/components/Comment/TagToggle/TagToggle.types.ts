export interface TagToggleProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export interface TagProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

export interface TagToggleViewModelProps {
  tags: string[];
  onTagsChange?: (tags: string[]) => void;
}
