import { FlatList, View } from 'react-native';
import { Itinerary } from 'src/common/models/GuideItineraries/guideItineraries.model';
import { NotifiedInterestCard } from 'src/components/NotifiedInterestCard/NotifiedInterestCard';

import { useGuidePanel } from '../GuidePanelScreenViewModel';
import { InterestedTouristsHeader } from './InterestedTouristsHeader/InterestedTouristsHeader';

export function InterestedTouristsItineraryScreen() {
  const { notifiedInterestCards } = useGuidePanel();

  return (
    <FlatList
      className='w-full'
      data={notifiedInterestCards()}
      ListHeaderComponent={<InterestedTouristsHeader />}
      renderItem={({ item }) => (
        <NotifiedInterestCard
          userName={item.userName}
          imageUrl={item.imageUrl}
          phone={item.phone}
          email={item.email}
          itineraryTitle={item.itineraryTitle}
        />
      )}
    />
  );
}
