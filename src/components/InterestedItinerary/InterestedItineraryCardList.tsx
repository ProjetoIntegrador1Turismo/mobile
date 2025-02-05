import { FlatList, View } from 'react-native';
import { InterestedItinerary } from '~/src/common/models/InterestedItinerary/InterestedItynerary.model';
import { InterestedItineraryCard } from '~/src/components/InterestedItinerary/InterestedItineraryCard/InterestedItineraryCard';

interface InterestedItineraryCardListProps {
  interestedItineraries: InterestedItinerary[];
  handleDeleteItinerary: (id: number) => Promise<void>;
}

export function InterestedItineraryCardList({
  interestedItineraries,
  handleDeleteItinerary,
}: InterestedItineraryCardListProps) {
  return (
    <FlatList
      className=''
      data={interestedItineraries}
      keyExtractor={(interested: InterestedItinerary) => interested.id.toString()}
      renderItem={({ item }) => (
        <InterestedItineraryCard
          itineraryId={item.id}
          guideImgUrl={item.guide.profileImageUrl}
          guideName={item.guide.firstName + ' ' + item.guide.lastName}
          itineraryTitle={item.title}
          itineraryImgUrl={item.imageCoverUrl}
          onDelete={() => handleDeleteItinerary(item.id)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View className='h-[400px]' />}
    />
  );
}
