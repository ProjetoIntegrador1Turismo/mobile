import { cn } from 'src/common/utils/cn';
import { InputErrorProps } from 'src/components/Auth/InputError/InputError.types';
import { CustomText } from 'src/components/Text/CustomText';

export function InputError({ children }: InputErrorProps) {
  return (
    <CustomText className={cn('text-red-600', !children && 'invisible')}>
      {children || ' '}
    </CustomText>
  );
}
