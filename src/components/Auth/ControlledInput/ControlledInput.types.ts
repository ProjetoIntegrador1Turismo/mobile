import { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface ControlledInputProps<T extends FieldValues> {
  label: string;
  placeholder: string;
  error?: string;
  password?: boolean;
  disabled?: boolean;
  name: FieldPath<T>;
  control: Control<T>;
}

export interface ControlledInputViewModelParams<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
}
