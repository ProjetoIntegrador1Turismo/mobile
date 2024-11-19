
import { api } from '~/src/common/repositories/client'
import { PaginatedResponse, pointRouteMapping } from '~/src/common/repositories/paginated/paginated.types'

//Rota para paginados -> http://localhost:8081/paginated/events?page=4&size=2

export async function fetchPaginatedPoints(page: number = 0, size: number = 10, pointType: string) {
    try {
        const response = await api.get<PaginatedResponse>(
            `/paginated/${pointRouteMapping[pointType]}`,
            { params: { page, size } }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar pontos:', error);
        throw error;
    }
}