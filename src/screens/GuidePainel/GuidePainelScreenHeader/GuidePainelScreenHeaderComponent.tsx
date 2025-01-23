import { View } from 'react-native';
import { GradientBorderButton } from '~/src/components/Button/GradientBorderButton/GradientBorderButton';
import { LogoTl } from '~/src/components/Logo/LogoTL';
import { CustomText } from '~/src/components/Text/CustomText';
import { PeopleOutline } from '~/src/components/ExpoIcons/PeopleOutline';
import { PlusIcon } from '~/src/components/ExpoIcons/Plus';

interface GuidePainelScreenHeaderComponentProps{
    onPressTouristsButton?: () => void;
}

export function GuidePainelScreenHeaderComponent({ onPressTouristsButton } : GuidePainelScreenHeaderComponentProps){
    return (
        <View className='bg-tl-bg p-4'>
            <View className='items-center'>
                <LogoTl />
                <CustomText className='mt-4 text-white' weight='bold' size={36}>
                    Painel do Guia!
                </CustomText>
                <CustomText className='mb-[21px] text-white' weight='light' size={14}>
                    Gerencie aqui seus clientes
                </CustomText>
                <CustomText className='mb-[21px] text-white' weight='bold' size={20}>
                    Opções:
                </CustomText>
            </View>
            <View className='items-center mb-[29px]'>
                <View className='pb-[24px]'>
                    <GradientBorderButton onPress={onPressTouristsButton} title='Turistas' className='w-[190px]' icon={<PeopleOutline />} />
                </View>
                <View>
                    <GradientBorderButton title='Criar Roteiro' className='w-[200px]' icon={<PlusIcon />} />            
                </View>
            </View>
            <CustomText className='text-white' size={24} weight='bold'>
                Seus Roteiros:
            </CustomText>            
        </View>
    )
}