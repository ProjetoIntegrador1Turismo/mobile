import { useGuideItinerariesQuery } from "~/src/common/hooks/queries/useGuideItinerariesQuery"
import { Itinerary } from "~/src/common/models/GuideItineraries/guideItineraries.model";


export function useGuideItineraryActionCardList(authToken:string){

    const { data, isLoading  } = useGuideItinerariesQuery(authToken);

    const itineraries: Itinerary[] = data || [];

    return {
        itineraries,
        isLoading
    }
}