import { View } from 'react-native';
import { GoBackButton } from '~/src/components/Button/GoBackButton/GoBackButton';
import { LogoTl } from '~/src/components/Logo/LogoTL';
import { CustomText } from '~/src/components/Text/CustomText';

export function InterestedTouristsHeader() {
  return (
    <View className='bg-black/50 p-4'>
      <GoBackButton />
      <View className='items-center'>
        <LogoTl />
        <CustomText className='mt-4 text-white' weight='bold' size={36}>
          Turistas
        </CustomText>
        <CustomText className='mb-[21px] text-white' weight='light' size={14}>
          Gerencie aqui seus clientes
        </CustomText>
        <CustomText className='mt-4 text-white' weight='bold' size={24}>
          Turistas Interessados:
        </CustomText>
      </View>
    </View>
  );
}
