import { useGuideItinerariesQuery } from "~/src/common/hooks/queries/useGuideItinerariesQuery";
import { GuideItinerariesModel, InterestedTourist, Itinerary } from "~/src/common/models/GuideItineraries/guideItineraries.model";
import { useAppRouter } from '~/src/common/lib/router';
import { NotifiedInterestCardProps } from "~/src/components/NotifiedInterestCard/NotifiedInterestCard.types";

export function useGuidePainel(authToken:string){

    const { data, isLoading  } = useGuideItinerariesQuery(authToken);
    const itineraries: Itinerary[] = data || [];
    const router = useAppRouter();

    const handleTouristButtonPress = () => {
        //Abre o modal para turistas interessados do guia logado
        //Provisóriamente, passa o authToken 
        router.push(`(modals)/interested-itinerary-tourists?authToken=${authToken}`);
    }

    const notifiedInterestCards = () => {
        return itineraries.flatMap((itinerary) =>
            itinerary.interestedTourists.map((tourist) => ({
              userName: `${tourist.firstName} ${tourist.lastName}`, // Junção de firstName + lastName
              imageUrl: tourist.profileImageUrl, // profileImageUrl do InterestedTourist
              phone: tourist.phone, // phone do InterestedTourist
              email: tourist.email, // email do InterestedTourist
              itineraryTitle: itinerary.title, // title do Itinerary
            }))
          );
    }

  
    return {
        itineraries,
        isLoading,
        handleTouristButtonPress,
        notifiedInterestCards
    }
}