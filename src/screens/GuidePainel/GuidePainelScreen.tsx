import { ActivityIndicator, FlatList, View } from "react-native";
import { GuideItineraryActionCard } from '~/src/components/Guide/GuideItineraryActionCardList/GuideItineraryActionCard/GuideItineraryActionCard';
import { useGuidePainel } from './GuidePainelScreenViewModel';
import { Itinerary } from '~/src/common/models/GuideItineraries/guideItineraries.model';
import { GuidePainelScreenHeaderComponent } from './GuidePainelScreenHeader/GuidePainelScreenHeaderComponent';


interface GuidePainelScreenProps{
    authToken:string;
}

export function GuidePainelScreen({ authToken }:GuidePainelScreenProps) {

    const { itineraries, isLoading, handleTouristButtonPress } = useGuidePainel(authToken);

    if (isLoading) {
        return (
          <View className='flex-1 items-center justify-center'>
            <ActivityIndicator size='large' />
          </View>
        );
    }

    return (
        <FlatList
            className="w-full"
            data={itineraries}
            keyExtractor={(itinerary: Itinerary) => itinerary.id.toString()}
            ListHeaderComponent={
                <GuidePainelScreenHeaderComponent
                onPressTouristsButton={handleTouristButtonPress}
                />
            }
            renderItem={ ({item}) => <GuideItineraryActionCard imageCoverUrl={item.imageCoverUrl} title={item.title} className="mb-[10px]" />}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View className='h-[200px]' />}
        /> 
    )
}