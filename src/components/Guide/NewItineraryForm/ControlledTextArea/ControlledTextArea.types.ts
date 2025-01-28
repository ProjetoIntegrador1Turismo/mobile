import { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface ControlledTextAreaProps<T extends FieldValues> {
  label: string;
  placeholder: string;
  error?: string;
  password?: boolean;
  disabled?: boolean;
  name: FieldPath<T>;
  control: Control<T>;
}

export interface ControlledTextAreaViewModelParams<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
}
