import { api } from '~/src/common/repositories/client'
import { InterestedItineraryModel } from '~/src/common/models/InterestedItinerary/InterestedItynerary.model'


export async function fetchInterestedItinerary(authToken:string){
    const { data } = await api.get<InterestedItineraryModel>('/user/me', {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return data;
}

export async function removeInterestedItinerary(authToken:string, itineraryId:number){
    try{
        await api.delete(`/tourist/signal/${itineraryId}`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
        return true;
    }catch (error) {
        return false;
    }
}