import { useAppRouter } from '~/src/common/lib/router';

const truncatedPointName = (pointName: string | undefined, maxNameLength: number) => {
  if (!pointName) return '';
  return pointName.length > maxNameLength
    ? `${pointName.substring(0, maxNameLength)}...`
    : pointName;
};

function onPressPointCard() {
  const router = useAppRouter();

  const handleItineraryPress = (itineraryId: number) => {
    router.push(`/itinerary/${itineraryId}`);
  };

  async function handlePressPointCard(id: number, type?: string) {
    if (type === 'ITINERARY') {
      handleItineraryPress(id);
    } else {
      router.push(`/point/${id}`);
    }
  }

  return {
    handlePressPointCard,
  };
}

export { truncatedPointName, onPressPointCard };
