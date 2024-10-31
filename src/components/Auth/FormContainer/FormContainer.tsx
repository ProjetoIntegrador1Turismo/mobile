import { KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import { cn } from 'src/common/utils/cn';
import { FormContainerProps } from 'src/components/Auth/FormContainer/FormContainer.types';

export function FormContainer({ children, className }: FormContainerProps) {
  return (
    <KeyboardAvoidingView
      className='flex-1'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView className={cn('flex flex-1', className)}>{children}</SafeAreaView>
    </KeyboardAvoidingView>
  );
}
