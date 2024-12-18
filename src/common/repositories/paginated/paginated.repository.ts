import { api } from '~/src/common/repositories/client'
import { CategoryDetailModel } from '~/src/common/models/Category/categoryDetail.model'

//Rota para paginados -> http://localhost:8081/paginated/events?page=4&size=2

const pointRouteMapping: Record<string, string> = {
    Hotel: 'hotels',
    Experiência: 'experiences',
    Restaurante: 'restaurants',
    Evento: 'events',
    'Ponto Turístico': 'tourist-points',
    Roteiros: 'itineraries'
  };

function defineApiRoute(text:string): string{
    console.log("String para map da rota: ", text)
    return pointRouteMapping[text] || 'all'
}

export async function fetchPaginatedPoints(pointType: string, page: number = 0, size: number = 30) { 
        
    const { data } = await api.get<CategoryDetailModel>(
        `/paginated/${defineApiRoute(pointType)}`,
        { params: { page, size } }
    );
    return data;  
}