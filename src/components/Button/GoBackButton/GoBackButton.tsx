import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { GoBackButtonProps } from 'src/components/Button/GoBackButton/GoBackButton.types';
import { useGoBackButtonViewModel } from 'src/components/Button/GoBackButton/GoBackButtonViewModel';

export function GoBackButton({ className }: GoBackButtonProps) {
  const { handleGoBack } = useGoBackButtonViewModel();

  return (
    <Pressable className={className} onPress={handleGoBack}>
      <Feather name='arrow-left' color='#E10357' size={48} />
    </Pressable>
  );
}
