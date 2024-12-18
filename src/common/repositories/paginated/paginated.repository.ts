import { api } from '~/src/common/repositories/client'
import { CategoryDetailModel } from '~/src/common/models/Category/categoryDetail.model'

//Rota para paginados -> http://localhost:8081/paginated/events?page=4&size=2

export async function fetchPaginatedPoints(pointType: string, page: number = 0, size: number = 15) { 
        
    const { data } = await api.get<CategoryDetailModel>(
        `/paginated/${pointType}`,
        { params: { page, size } }
    );
    return data;  
}