import { useInterestedItineraryQuery } from "~/src/common/hooks/queries/useInterestedItineraryQuery";
import { removeInterestedItinerary } from "~/src/common/repositories/InterestedItinerary/interested.repository";
import { useQueryClient } from '@tanstack/react-query';


export function useInterestedScreenViewModel(authToken:string){

    const { data, refetch, isLoading } = useInterestedItineraryQuery(authToken);

    const handleDeleteItinerary = async (id:number) => {
        console.log("Remover roteiro de id: ", id)
        const success = await removeInterestedItinerary(authToken, id);
        console.log("Valor do success: ", success)
        if (success) {
            console.log("Acessou o refetch? ", success)
            refetch()
        } else {
            console.log("Erro ao tentar remover roteiro dos favoritos")
        }
    }

    return {
        data,
        isLoading,
        handleDeleteItinerary
    }
}