import { useGuideItinerariesQuery } from '~/src/common/hooks/queries/useGuideItinerariesQuery';
import { Itinerary } from '~/src/common/models/GuideItineraries/guideItineraries.model';
import { useAppRouter } from '~/src/common/lib/router';

export function useGuidePainel(authToken:string){

    const { data, isLoading  } = useGuideItinerariesQuery(authToken);
    const itineraries: Itinerary[] = data || [];
    const router = useAppRouter();

    const handleTouristButtonPress = () => {
        //Abre o modal para turistas interessados do guia logado
        //Provisóriamente, passa o authToken 
        router.push(`(modals)/interested-itinerary-tourists?authToken=${authToken}`);
    }

    //Função que extrai os turistas interessados dos roteiros do guia logado
    const notifiedInterestCards = () => {
        return itineraries.flatMap((itinerary) =>
            itinerary.interestedTourists.map((tourist) => ({
              userName: `${tourist.firstName} ${tourist.lastName}`, 
              imageUrl: tourist.profileImageUrl, 
              phone: tourist.phone, 
              email: tourist.email, 
              itineraryTitle: itinerary.title, 
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