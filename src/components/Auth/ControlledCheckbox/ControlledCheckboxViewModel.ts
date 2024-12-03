import { useController, FieldValues } from 'react-hook-form';
import { ControlledCheckboxViewModelParams } from 'src/components/Auth/ControlledCheckbox/ControlledCheckbox.types';

export const useControlledCheckboxViewModel = <T extends FieldValues>({
  control,
  name,
}: ControlledCheckboxViewModelParams<T>) => {
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

  return { fieldValue, fieldOnChange, errorMsg };
};
