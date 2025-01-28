import { useController, FieldValues } from 'react-hook-form';
import { ControlledTextAreaViewModelParams } from 'src/components/Guide/NewItineraryForm/ControlledTextArea/ControlledTextArea.types';

export const useControlledTextAreaViewModel = <T extends FieldValues>({
  control,
  name,
}: ControlledTextAreaViewModelParams<T>) => {
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
