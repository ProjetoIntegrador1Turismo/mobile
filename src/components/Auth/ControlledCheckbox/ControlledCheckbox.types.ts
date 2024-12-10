import { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface ControlledCheckboxProps<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  control: Control<T>;
}

export interface ControlledCheckboxViewModelParams<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
}
