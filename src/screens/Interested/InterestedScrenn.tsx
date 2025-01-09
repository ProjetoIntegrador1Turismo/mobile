import { ActivityIndicator, View } from 'react-native';
import { InterestedItineraryCard } from '~/src/components/InterestedItinerary/InterestedItineraryCard/InterestedItineraryCard';
import { LogoTl } from '~/src/components/Logo/LogoTL';
import { SearchTextInputBar } from '~/src/components/SearchTextInputBar/SearchTextInputBar';
import { CustomText } from '~/src/components/Text/CustomText';
import { useInterestedScreenViewModel } from './InterestedScreenViewModel';
import { InterestedItineraryCardList } from '~/src/components/InterestedItinerary/InterestedItineraryCardList';
import UnauthenticatedImage from '~/src/components/Auth/UnauthenticatedImage/UnauthenticatedImage';
import { UnselectedItinerary } from '~/src/components/InterestedItinerary/unselectedItinerary/unselectedItinerary';

interface InterestedScreenProps {
  authToken:string
}

export function InterestedScreen({ authToken }: InterestedScreenProps) {
  
  const { data, handleDeleteItinerary, isLoading } = useInterestedScreenViewModel(authToken);  

  return (
    <View className='flex-1 bg-tl-bg p-4'>
      <View className='items-center'>
        <LogoTl />
        <CustomText className='mt-8 text-white' weight='bold' size={36}>
          Roteiros
        </CustomText>
        <CustomText className='mb-[30px] text-white' weight='light' size={14}>
          Roteiros que você se interessou
        </CustomText>
      </View>
      <SearchTextInputBar placeholder='Pesquise seu roteiro' />
      {
        isLoading ? (
          <View className='flex-1 items-center justify-center'>
            <ActivityIndicator size='large' />
          </View>
        ) : (
          data?.interestedItineraries && data.interestedItineraries.length > 0 ? (
            <InterestedItineraryCardList
              interestedItineraries={data.interestedItineraries}
              handleDeleteItinerary={handleDeleteItinerary}
            />
          ) : (
            <UnselectedItinerary />
          )
        )
      }
    </View>
  );
}
