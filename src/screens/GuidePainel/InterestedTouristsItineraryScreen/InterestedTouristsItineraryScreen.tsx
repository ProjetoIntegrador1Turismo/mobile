import { FlatList, View } from 'react-native';
import { InterestedTouristsHeader } from './InterestedTouristsHeader/InterestedTouristsHeader';
import { Itinerary } from '~/src/common/models/GuideItineraries/guideItineraries.model';
import { useGuidePainel } from '../GuidePainelScreenViewModel';
import { NotifiedInterestCard } from '~/src/components/NotifiedInterestCard/NotifiedInterestCard';

export function InterestedTouristsItineraryScreen() {
  const { notifiedInterestCards } = useGuidePainel();

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
