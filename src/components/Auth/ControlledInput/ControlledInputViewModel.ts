import { useState } from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { ControlledInputViewModelParams } from 'src/components/Auth/ControlledInput/ControlledInput.types';

export const useControlledInputViewModel = <T extends FieldValues>({
  control,
  name,
}: ControlledInputViewModelParams<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const {
    field,
    fieldState: { error },
  } = useController<T>({
    control,
    name,
    defaultValue: '' as unknown as T[keyof T],
  });

  const fieldValue = field.value;
  const fieldOnChange = field.onChange;
  const errorMsg = error?.message;

  return { fieldValue, fieldOnChange, errorMsg, showPassword, togglePasswordVisibility };
};
