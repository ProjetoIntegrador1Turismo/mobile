import { SafeAreaView } from 'react-native';
import { cn } from 'src/common/utils/cn';
import { ContainerProps } from 'src/components/Container/Container.types';

export const Container = ({ children, className }: ContainerProps) => {
  return <SafeAreaView className={cn('flex flex-1', className)}>{children}</SafeAreaView>;
};
