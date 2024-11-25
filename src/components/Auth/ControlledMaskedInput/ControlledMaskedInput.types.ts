import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { type Mask } from 'react-native-mask-input';
export interface ControlledMaskedInputProps<T extends FieldValues> {
  label: string;
  placeholder: string;
  error?: string;
  mask: Mask;
  name: FieldPath<T>;
  control: Control<T>;
}

export interface ControlledMaskedInputViewModelParams<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
}
