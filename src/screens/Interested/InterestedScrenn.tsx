import { ActivityIndicator, View } from 'react-native';
import { LogoTl } from '~/src/components/Logo/LogoTL';
import { SearchTextInputBar } from '~/src/components/SearchTextInputBar/SearchTextInputBar';
import { CustomText } from '~/src/components/Text/CustomText';
import { useInterestedScreenViewModel } from '~/src/screens/Interested/InterestedScreenViewModel';
import { InterestedItineraryCardList } from '~/src/components/InterestedItinerary/InterestedItineraryCardList';
import { UnselectedItinerary } from '~/src/components/InterestedItinerary/unselectedItinerary/unselectedItinerary';
import UnauthenticatedImage from '~/src/components/Auth/UnauthenticatedImage/UnauthenticatedImage';

interface InterestedScreenProps {
  authToken: string;
}

export function InterestedScreen({ authToken }: InterestedScreenProps) {
  const { data, handleDeleteItinerary, isLoading, error } = useInterestedScreenViewModel(authToken);
  const axiosError = error as any;

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
      {isLoading ? (
        <View className='flex-1 items-center justify-center'>
          <ActivityIndicator size='large' />
        </View>
      ) : axiosError.response.status === 401 ? (
        <View className='items-center justify-center'>
          <UnauthenticatedImage className='mt-8 h-64 w-64' />
          <CustomText className='text-white'>Login expirado. Autentique novamente.</CustomText>
        </View>
      ) : data?.interestedItineraries && data.interestedItineraries.length > 0 ? (
        <InterestedItineraryCardList
          interestedItineraries={data.interestedItineraries}
          handleDeleteItinerary={handleDeleteItinerary}
        />
      ) : (
        <UnselectedItinerary />
      )}
    </View>
  );
}
