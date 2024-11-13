import { KeyboardAvoidingView, SafeAreaView, Platform, ScrollView } from 'react-native';
import { cn } from 'src/common/utils/cn';
import { FormContainerProps } from 'src/components/Auth/FormContainer/FormContainer.types';

export function FormContainer({ children, className }: FormContainerProps) {
  return (
    <KeyboardAvoidingView
      className='flex-1'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView className='h-full flex-1 bg-tl-bg' overScrollMode='never'>
        <SafeAreaView className={cn('flex flex-1', className)}>{children}</SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
