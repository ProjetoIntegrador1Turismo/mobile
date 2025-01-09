import { useQuery } from '@tanstack/react-query'
import { InterestedItineraryModel } from '~/src/common/models/InterestedItinerary/InterestedItynerary.model'
import { fetchInterestedItinerary } from '~/src/common/repositories/InterestedItinerary/interested.repository'

export const useInterestedItineraryQuery = (authToken: string) => {
    return useQuery<InterestedItineraryModel>({
        queryKey: ['interested'],
        queryFn: () => fetchInterestedItinerary(authToken)
    })
}