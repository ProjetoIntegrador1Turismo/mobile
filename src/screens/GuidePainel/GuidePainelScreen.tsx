import { FlatList, View } from "react-native";
import { GuideItineraryActionCard } from '~/src/components/Guide/GuideItineraryActionCardList/GuideItineraryActionCard/GuideItineraryActionCard';
import { useGuidePainel } from './GuidePainelScreenViewModel';
import { Itinerary } from '~/src/common/models/GuideItineraries/guideItineraries.model';
import { GuidePainelScreenHeaderComponent } from './GuidePainelScreenHeader/GuidePainelScreenHeaderComponent';


interface GuidePainelScreenProps{
    authToken:string;
}

export function GuidePainelScreen({ authToken }:GuidePainelScreenProps) {

    const { itineraries, isLoading } = useGuidePainel(authToken);

    return (
        <FlatList
            className="w-full"
            data={itineraries}
            keyExtractor={(itinerary: Itinerary) => itinerary.id.toString()}
            ListHeaderComponent={
                <GuidePainelScreenHeaderComponent />
            }
            renderItem={ ({item}) => <GuideItineraryActionCard imageCoverUrl={item.imageCoverUrl} title={item.title} className="mb-[10px]" />}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View className='h-[200px]' />}
        /> 
    )
}