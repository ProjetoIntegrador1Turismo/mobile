import { useQuery } from "@tanstack/react-query"
import { CategoryDetailModel } from '~/src/common/models/Category/categoryDetail.model'
import { fetchPaginatedPoints } from '~/src/common/repositories/paginated/paginated.repository'


export const useCategoryDetailQuery = (pointType: string, page: number) => {
    return useQuery<CategoryDetailModel>({
        queryKey: ['category', pointType],
        queryFn: () => fetchPaginatedPoints(pointType, page)
    })
}