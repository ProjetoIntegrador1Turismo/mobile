export interface TagToggleProps {
  title: string;
  tags: string[];
  onTagsChange?: (tags: string[]) => void;
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
