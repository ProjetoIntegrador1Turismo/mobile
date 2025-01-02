import { View } from 'react-native';
import { InterestedItineraryCard } from '~/src/components/InterestedItineraryCard/InterestedItineraryCard';
import { LogoTl } from '~/src/components/Logo/LogoTL';
import { SearchTextInputBar } from '~/src/components/SearchTextInputBar/SearchTextInputBar';
import { CustomText } from '~/src/components/Text/CustomText';


export function InterestedScreen() {
    return (
        <View className="flex-1 bg-tl-bg p-8">
            <View className="items-center">
                <LogoTl />
                <CustomText className="text-white mt-8" weight="bold" size={36}>
                    Roteiros
                </CustomText>
                <CustomText className="text-white mb-[30px]" weight="light" size={14}>
                    Roteiros que você se interessou
                </CustomText>
            </View>
            <SearchTextInputBar placeholder='Pesquise seu roteiro'/>
            <InterestedItineraryCard />
            <InterestedItineraryCard />
        </View>
    );
}
