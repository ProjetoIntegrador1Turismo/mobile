import { api } from '~/src/common/repositories/client'
import { GuideItinerariesModel  } from '~/src/common/models/GuideItineraries/guideItineraries.model'

export async function fetchGuideItineraries(authToken:string){
    const { data } = await api.get<GuideItinerariesModel>('/itinerary/guide', {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return data;
}