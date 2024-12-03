import { View } from 'react-native';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { CustomText } from 'src/components/Text/CustomText';
import { useRecoverySucessViewModel } from 'src/screens/Recovery/RecoverySucess/RecoverySucessViewModel';

export function RecoverySucessView() {
  const { handleGoBack } = useRecoverySucessViewModel();

  return (
    <View className='flex flex-1 bg-tl-bg'>
      <View className='flex-1 items-center justify-center'>
        <CustomText size={36} className='text-center text-white'>
          Sucesso!
        </CustomText>
        <CustomText className='text-center text-white' size={20}>
          Um e-mail com instruções para recuperar sua senha foi enviado para sua caixa de entrada!
        </CustomText>
        <View className='mt-3 w-[90%]'>
          <TLGradientButton title='Voltar' onPress={handleGoBack} />
        </View>
      </View>
      <View className='items-center pb-8'>
        <TLLogoWhite className='h-[100px] w-[150px] object-cover' />
      </View>
    </View>
  );
}
