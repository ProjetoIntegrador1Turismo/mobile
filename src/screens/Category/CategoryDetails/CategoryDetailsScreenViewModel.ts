import { useEffect, useState } from 'react';
import { useCategoryDetailQuery } from '~/src/common/hooks/queries/useCategoryDetailQuery';
import { fetchPaginatedPoints } from '~/src/common/repositories/paginated/paginated.repository';
import { PaginatedResponse } from '~/src/common/repositories/paginated/paginated.types';

export function useCategoryDetailsScreenViewModel(categoryTitle: string) {
  
  const pointRouteMapping: Record<string, string> = {
    Hotel: 'hotels',
    Experiência: 'experiences',
    Restaurante: 'restaurants',
    Evento: 'events',
    'Ponto Turístico': 'tourist-points'
  };

  const { data, isLoading } = useCategoryDetailQuery(pointRouteMapping[categoryTitle], 0)


  return {
    isLoading,
    data,
  };
}
