import { useGuideItinerariesQuery } from "~/src/common/hooks/queries/useGuideItinerariesQuery";
import { InterestedTourist, Itinerary } from "~/src/common/models/GuideItineraries/guideItineraries.model";


export function useGuidePainel(authToken:string){

    const { data, isLoading  } = useGuideItinerariesQuery(authToken);

    const itineraries: Itinerary[] = data || [];

    const handleTouristButtonPress = () => {
        //Abre o modal e carrega os turistas interessados do guia logado
        //Provisóriamente, passa o authToken 
        console.log("testando.")
    }
  
    return {
        itineraries,
        isLoading,
        handleTouristButtonPress
    }
}