import { FlatList, View } from "react-native";
import { useGuideItineraryActionCardList } from "./GuideItineraryActionCardViewModel";
import { Itinerary } from "~/src/common/models/GuideItineraries/guideItineraries.model";
import { GuideItineraryActionCard } from "./GuideItineraryActionCard/GuideItineraryActionCard";

interface Props {
    data: Itinerary[];
}

export function GuideItineraryActionCardList({ data }: Props){
    return (
        <FlatList
            data={data}
            keyExtractor={(itinerary: Itinerary) => itinerary.id.toString()}
            renderItem={ ({item}) => <GuideItineraryActionCard imageCoverUrl={item.imageCoverUrl} title={item.title} className="mb-[10px]" />}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View className='h-[400px]' />}
        />        
    )
}
